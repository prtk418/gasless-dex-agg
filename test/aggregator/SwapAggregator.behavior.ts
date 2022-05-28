import { expect } from "chai";
import { ethers } from "hardhat";

export function shouldBehaveLikeSwapAggregator(): void {
  it("should swap", async function () {
    const usdt = await ethers.getContractAt("ERC20Token","0xdac17f958d2ee523a2206206994597c13d831ec7");
    const wbtc = await ethers.getContractAt("ERC20Token","0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599");
    const sushiRouter = await ethers.getContractAt("SushiRouter", "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F");

    // get usdt to deposit
    await sushiRouter
      .connect(this.signers.admin)
      .swapExactETHForTokens(
        "100",
        [await sushiRouter.WETH(), usdt.address],
        this.signers.admin.address,
        Date.now() + 1000 * 60 * 10,
        { value: ethers.utils.parseEther("100") }
        );

    let usdtBalance = await usdt.balanceOf(this.signers.admin.address);
    console.log("usdt balance: ", usdtBalance);

    await usdt.transfer(this.swapAggregator.address, usdtBalance);
    console.log('agg add:', this.swapAggregator.address);

    await this.swapAggregator.bestSwap(usdt.address, wbtc.address, usdtBalance, 1);
  });
}
