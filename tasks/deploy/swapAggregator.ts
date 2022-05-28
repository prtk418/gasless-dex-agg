import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { SwapAggregator } from "../../src/types/SwapAggregator";
import type { SwapAggregator__factory } from "../../src/types/factories/SwapAggregator__factory";

task("deploy:SwapAggregator")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();
    const swapAggregatorFactory: SwapAggregator__factory = <SwapAggregator__factory>await ethers.getContractFactory("SwapAggregator");
    const swapAggregator: SwapAggregator = <SwapAggregator>await swapAggregatorFactory.connect(signers[0]).deploy(taskArguments.greeting);
    await swapAggregator.deployed();
    console.log("SwapAggregator deployed to: ", swapAggregator.address);
  });
