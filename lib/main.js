"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const evm_processor_1 = require("@subsquid/evm-processor");
const typeorm_store_1 = require("@subsquid/typeorm-store");
const magicedenAbi = __importStar(require("./abi/magiceden"));
const model_1 = require("./model");
const get_block_number_1 = require("./utils/get-block-number");
const db = new typeorm_store_1.TypeormDatabase();
async function main() {
    // Calculate the block number for 7 days ago
    const blockNumberXDaysAgo = await (0, get_block_number_1.getBlockNumberXDaysAgo)(1);
    const processor = new evm_processor_1.EvmBatchProcessor()
        .setGateway("https://v2.archive.subsquid.io/network/base-mainnet")
        .setRpcEndpoint({
        // Set RPC endpoint from .env
        url: process.env.BASE_RPC,
        rateLimit: 10,
    })
        .setFinalityConfirmation(75) // 15 mins to finality
        .addLog({
        address: [process.env.BASE_MAGICEDEN_ADDRESS],
        topic0: [
            magicedenAbi.events.BuyListingERC721.topic,
            magicedenAbi.events.BuyListingERC1155.topic,
        ],
    })
        .setBlockRange({
        from: blockNumberXDaysAgo, // Use the calculated block number
    });
    processor.run(db, async (ctx) => {
        const sales = [];
        for (let block of ctx.blocks) {
            const blockTimestamp = block.header.timestamp; // Get the timestamp from the block header
            for (let log of block.logs) {
                let saleData;
                let isERC721 = false;
                // Decode the log based on its topic
                if (log.topics[0] === magicedenAbi.events.BuyListingERC721.topic) {
                    saleData = magicedenAbi.events.BuyListingERC721.decode(log);
                    isERC721 = true; // Set flag for ERC721
                }
                else if (log.topics[0] ===
                    magicedenAbi.events.BuyListingERC1155.topic) {
                    saleData =
                        magicedenAbi.events.BuyListingERC1155.decode(log);
                    isERC721 = false; // Set flag for ERC721
                }
                if (saleData) {
                    const { buyer, seller, paymentCoin, salePrice, tokenId, tokenAddress, } = saleData;
                    sales.push(new model_1.Sale({
                        id: log.id,
                        buyer,
                        seller,
                        paymentCoin,
                        salePrice,
                        tokenId,
                        tokenAddress,
                        timestamp: BigInt(new Date(blockTimestamp * 1000).getTime()), // Convert to JavaScript Date object
                        isERC721
                    }));
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
