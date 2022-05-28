import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { SwapAggregator } from "../../src/types/SwapAggregator";
import { Signers } from "../types";
import { shouldBehaveLikeSwapAggregator } from "./SwapAggregator.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("SwapAggregator", function () {
    beforeEach(async function () {
      const swapAggregatorArtifact: Artifact = await artifacts.readArtifact("SwapAggregator");
      this.swapAggregator = <SwapAggregator>await waffle.deployContract(this.signers.admin, swapAggregatorArtifact);
    });

    shouldBehaveLikeSwapAggregator();
  });
});
