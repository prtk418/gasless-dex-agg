// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";
import { ISwapRouter } from "./interfaces/ISwapRouter.sol";
import { IUniswapV2Router01 } from "./interfaces/IUniswapV2Router01.sol";
import { IERC20 } from "./interfaces/IERC20.sol";

contract SwapAggregator {

    IUniswapV2Router01 uniswapV2Router;
    IUniswapV2Router01 sushiSwapLegacyRouter;

    constructor() {
        uniswapV2Router = IUniswapV2Router01(0xf164fC0Ec4E93095b804a4795bBe1e041497b92a);
        sushiSwapLegacyRouter = IUniswapV2Router01(0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F);
    }

    function bestSwap(address _tokenIn, address _tokenOut, uint256 _amountIn, uint256 _amountOutMin) external returns(uint256) {
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        IERC20(_tokenIn).balanceOf(address(this));
        IERC20(_tokenIn).approve(address(sushiSwapLegacyRouter), _amountIn);
        IERC20(_tokenIn).allowance(address(this), address(sushiSwapLegacyRouter));
        address[] memory path = new address[](2);
        path[0] = _tokenIn;
        path[1] = _tokenOut;
        uint8 routerIdx = _bestRouterIndex(path, _amountIn);
        uint256[] memory amounts;
        if (routerIdx == 0) {
            amounts = uniswapV2Router.swapExactTokensForTokens(_amountIn, 0, path, address(this), block.timestamp+150);
        } else {
            amounts = sushiSwapLegacyRouter.swapExactTokensForTokens(_amountIn, _amountOutMin, path, address(this), block.timestamp+150);
        }
        IERC20(_tokenOut).transferFrom(address(this), msg.sender, amounts[amounts.length-1]);
        return amounts[amounts.length-1];
    }

    function _bestRouterIndex(address[] memory _path, uint256 _amountIn) private view returns(uint8 routerIndex) {
        uint256[] memory univ2Out = uniswapV2Router.getAmountsOut(_amountIn, _path);
        uint256[] memory sushiOut = sushiSwapLegacyRouter.getAmountsOut(_amountIn, _path);
        if (univ2Out[univ2Out.length-1] > sushiOut[sushiOut.length-1]) {
            return 0;
        } else {
            return 1;
        }
    }
}
