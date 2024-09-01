import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as magicedenAbi from "./abi/magiceden";
import { Sale } from "./model";
import { getBlockNumberXDaysAgo } from "./utils/get-block-number";

const db = new TypeormDatabase();

async function main() {
    // Calculate the block number for 7 days ago
    const blockNumberXDaysAgo = await getBlockNumberXDaysAgo(1);

    const processor = new EvmBatchProcessor()
        .setGateway("https://v2.archive.subsquid.io/network/base-mainnet")
        .setRpcEndpoint({
            // Set RPC endpoint from .env
            url: process.env.BASE_RPC as string,
            rateLimit: 10,
        })
        .setFinalityConfirmation(75) // 15 mins to finality
        .addLog({
            address: [process.env.BASE_MAGICEDEN_ADDRESS as string],
            topic0: [
                magicedenAbi.events.BuyListingERC721.topic,
                magicedenAbi.events.BuyListingERC1155.topic,
            ],
        })
        .setBlockRange({
            from: blockNumberXDaysAgo, // Use the calculated block number
        });

    processor.run(db, async (ctx) => {
        const sales: Sale[] = [];
        for (let block of ctx.blocks) {
            const blockTimestamp = block.header.timestamp; // Get the timestamp from the block header
            for (let log of block.logs) {
                let saleData;
                let isERC721 = false;

                // Decode the log based on its topic
                if (
                    log.topics[0] === magicedenAbi.events.BuyListingERC721.topic
                ) {
                    saleData = magicedenAbi.events.BuyListingERC721.decode(log);
                    isERC721 = true; // Set flag for ERC721
                } else if (
                    log.topics[0] ===
                    magicedenAbi.events.BuyListingERC1155.topic
                ) {
                    saleData =
                    magicedenAbi.events.BuyListingERC1155.decode(log);
                    isERC721 = false; // Set flag for ERC721
                }

                if (saleData) {
                    const {
                        buyer,
                        seller,
                        paymentCoin,
                        salePrice,
                        tokenId,
                        tokenAddress,
                    } = saleData;
                    sales.push(
                        new Sale({
                            id: log.id,
                            buyer,
                            seller,
                            paymentCoin,
                            salePrice,
                            tokenId,
                            tokenAddress,
                            timestamp: BigInt(
                                new Date(blockTimestamp * 1000).getTime()
                            ), // Convert to JavaScript Date object
                            isERC721
                        })
                    );
                }
            }
        }
        await ctx.store.insert(sales);
    });
}

// Run the main function
main().catch((error) => {
    console.error("Error running the processor:", error);
    process.exit(1);
});
