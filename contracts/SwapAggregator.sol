// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";
import { ISwapRouter } from "./interfaces/ISwapRouter.sol";
import { IUniswapV2Router02 } from "./interfaces/IUniswapV2Router02.sol";
import { IERC20 } from "./interfaces/IERC20.sol";

contract SwapAggregator {

    ISwapRouter uniswapV3Router;
    IUniswapV2Router02 uniswapV2Router;
    IUniswapV2Router02 sushiSwapRouter;
    uint24 constant protocolFee = 3000; //0.3%

    constructor() {
        uniswapV3Router = ISwapRouter(0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45);
        uniswapV2Router = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
        sushiSwapRouter = IUniswapV2Router02(0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F);
    }

    function bestSwap(address _tokenIn, address _tokenOut, uint256 _amountIn, uint256 _amountOutMin) external returns(uint256 amountOut) {
        console.log('transfer started');
        uint256 balance = IERC20(_tokenIn).balanceOf(address(this));
        console.log(balance);
        // bool status = IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        console.log(address(uniswapV3Router));
        IERC20(_tokenIn).approve(address(uniswapV3Router), _amountIn);
        console.log('transferred and approved');
        amountOut = uniswapV3Router.exactInputSingle(ISwapRouter.ExactInputSingleParams(
            _tokenIn,
            _tokenOut,
            protocolFee,
            msg.sender,
            block.timestamp + 1000,
            _amountIn,
            _amountOutMin,
            0));
    }
}
