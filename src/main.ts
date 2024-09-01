import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as magicedenAbi from "./abi/magiceden";
import * as basenameAbi from "./abi/basename";
import { Sale, NameRegisteredEvent, NameRenewedEvent } from "./model";
import { getBlockNumberXDaysAgo } from "./utils/get-block-number";

const db = new TypeormDatabase();

async function main() {
    // Calculate the block number for X days ago
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
            address: [
                process.env.BASE_MAGICEDEN_ADDRESS as string,
                process.env.BASE_NAME_ADDRESS as string,
            ],
            topic0: [
                magicedenAbi.events.BuyListingERC721.topic,
                magicedenAbi.events.BuyListingERC1155.topic,
                basenameAbi.events.NameRegistered.topic,
                basenameAbi.events.NameRenewed.topic,
            ],
        })
        .setBlockRange({
            from: blockNumberXDaysAgo, // Use the calculated block number
        });

    processor.run(db, async (ctx) => {
        const sales: Sale[] = [];
        const registeredNames: NameRenewedEvent[] = [];
        const renewedNames: NameRenewedEvent[] = [];
        for (let block of ctx.blocks) {
            const blockTimestamp = block.header.timestamp; // Get the timestamp from the block header
            for (let log of block.logs) {
                let saleData: any;
                let isERC721 = false;
                let nameRegisteredData: any;
                let nameRenewedData: any;

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
                    isERC721 = false; // Set flag for ERC1155
                } else if (
                    log.topics[0] === basenameAbi.events.NameRegistered.topic
                ) {
                    nameRegisteredData =
                        basenameAbi.events.NameRegistered.decode(log);
                } else if (
                    log.topics[0] === basenameAbi.events.NameRenewed.topic
                ) {
                    nameRenewedData =
                        basenameAbi.events.NameRenewed.decode(log);
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
                            isERC721,
                        })
                    );
                }

                if (nameRegisteredData) {
                    const { name, label, owner, expires } = nameRegisteredData;
                    registeredNames.push(
                        new NameRegisteredEvent({
                            id: log.id,
                            name,
                            label,
                            owner,
                            expires,
                        })
                    );
                }

                if (nameRenewedData) {
                    const { name, label, expires } = nameRenewedData;
                    renewedNames.push(
                        new NameRenewedEvent({
                            id: log.id,
                            name,
                            label,
                            expires,
                        })
                    );
                }
            }
        }
        await ctx.store.insert(sales);
        await ctx.store.insert(registeredNames);
        await ctx.store.insert(renewedNames);
    });
}

// Run the main function
main().catch((error) => {
    console.error("Error running the processor:", error);
    process.exit(1);
});
