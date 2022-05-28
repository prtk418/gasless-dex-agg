import { expect } from "chai";
import { ethers } from "hardhat";

export function shouldBehaveLikeSwapAggregator(): void {
  it("should swap", async function () {
    const usdc = await ethers.getContractAt("ERC20Token","0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
    const weth = await ethers.getContractAt("ERC20Token","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    const sushiRouter = await ethers.getContractAt("SushiRouter", "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F");

    // get usdc to deposit
    await sushiRouter
      .connect(this.signers.admin)
      .swapExactETHForTokens(
        "100",
        [await sushiRouter.WETH(), usdc.address],
        this.signers.admin.address,
        Date.now() + 1000 * 60 * 10,
        { value: ethers.utils.parseEther("100") }
      );

    let usdcBalancePre = await usdc.balanceOf(this.signers.admin.address);
    let wethBalancePre = await weth.balanceOf(this.signers.admin.address);

    await usdc.approve(this.swapAggregator.address, usdcBalancePre);
    
    await this.swapAggregator.bestSwap(usdc.address, weth.address, usdcBalancePre, 1);

    let usdcBalancePost = await usdc.balanceOf(this.signers.admin.address);
    let wethBalancePost = await weth.balanceOf(this.signers.admin.address);
    expect(usdcBalancePost).to.lt(usdcBalancePre);
    expect(wethBalancePost).to.gt(wethBalancePre);
  });
}
