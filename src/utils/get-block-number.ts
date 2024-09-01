// const { ethers } = require("ethers");

import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

export const getBlockNumberXDaysAgo = async (daysAgo: number) => {
    // console.log(process.env.BASE_RPC);
    // return;
    const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC);

    // Step 1: Calculate the target timestamp (Unix time for `daysAgo` days ago)
    const secondsInADay = 24 * 60 * 60;
    const targetTimestamp =
        Math.floor(Date.now() / 1000) - daysAgo * secondsInADay;

    // Step 2: Get the latest block number
    const latestBlock = await provider.getBlock("latest");
    let low = 0;
    let high = latestBlock.number;
    let mid: any;
    let block: any;

    // Step 3: Perform a binary search to find the block closest to the target timestamp
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        block = await provider.getBlock(mid);

        if (block.timestamp < targetTimestamp) {
            low = mid + 1;
        } else if (block.timestamp > targetTimestamp) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    // The closest block will be at `high` after the loop exits
    return high;
};

// getBlockNumberXDaysAgo(7)
//     .then((blockNumber) => {
//         console.log(`Block number 7 days ago: ${blockNumber}`);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
