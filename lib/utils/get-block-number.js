"use strict";
// const { ethers } = require("ethers");
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
exports.getBlockNumberXDaysAgo = void 0;
const ethers_1 = require("ethers");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const getBlockNumberXDaysAgo = async (daysAgo) => {
    // console.log(process.env.BASE_RPC);
    // return;
    const provider = new ethers_1.ethers.JsonRpcProvider(process.env.BASE_RPC);
    // Step 1: Calculate the target timestamp (Unix time for `daysAgo` days ago)
    const secondsInADay = 24 * 60 * 60;
    const targetTimestamp = Math.floor(Date.now() / 1000) - daysAgo * secondsInADay;
    // Step 2: Get the latest block number
    const latestBlock = await provider.getBlock("latest");
    let low = 0;
    let high = latestBlock.number;
    let mid;
    let block;
    // Step 3: Perform a binary search to find the block closest to the target timestamp
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        block = await provider.getBlock(mid);
        if (block.timestamp < targetTimestamp) {
            low = mid + 1;
        }
        else if (block.timestamp > targetTimestamp) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    // The closest block will be at `high` after the loop exits
    return high;
};
exports.getBlockNumberXDaysAgo = getBlockNumberXDaysAgo;
// getBlockNumberXDaysAgo(7)
//     .then((blockNumber) => {
//         console.log(`Block number 7 days ago: ${blockNumber}`);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
