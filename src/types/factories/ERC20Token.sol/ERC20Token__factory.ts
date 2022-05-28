/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20Token,
  ERC20TokenInterface,
} from "../../ERC20Token.sol/ERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimal_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_cappedSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526008805461ffff191690553480156200001c57600080fd5b50604051620013d8380380620013d88339810160408190526200003f916200046f565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350835162000095906006906020870190620002fc565b508251620000ab906005906020860190620002fc565b506004805460ff191660ff8416908117909155620000cb90600a6200060d565b620000d7908262000625565b6007556004546200010990620000f29060ff16600a6200060d565b6200010390640ba43b740062000625565b62000114565b50505050506200069e565b600080546001600160a01b03163314620001755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b62000181338362000189565b506001919050565b6001600160a01b038216620001e15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016200016c565b620001fd816003546200029060201b620005c51790919060201c565b6003556001600160a01b03821660009081526001602090815260409091205462000232918390620005c562000290821b17901c565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620002849085815260200190565b60405180910390a35050565b6000806200029f838562000647565b905083811015620002f35760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016200016c565b90505b92915050565b8280546200030a9062000662565b90600052602060002090601f0160209004810192826200032e576000855562000379565b82601f106200034957805160ff191683800117855562000379565b8280016001018555821562000379579182015b82811115620003795782518255916020019190600101906200035c565b50620003879291506200038b565b5090565b5b808211156200038757600081556001016200038c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620003ca57600080fd5b81516001600160401b0380821115620003e757620003e7620003a2565b604051601f8301601f19908116603f01168101908282118183101715620004125762000412620003a2565b816040528381526020925086838588010111156200042f57600080fd5b600091505b8382101562000453578582018301518183018401529082019062000434565b83821115620004655760008385830101525b9695505050505050565b600080600080608085870312156200048657600080fd5b84516001600160401b03808211156200049e57600080fd5b620004ac88838901620003b8565b95506020870151915080821115620004c357600080fd5b50620004d287828801620003b8565b935050604085015160ff81168114620004ea57600080fd5b6060959095015193969295505050565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111562000551578160001904821115620005355762000535620004fa565b808516156200054357918102915b93841c939080029062000515565b509250929050565b6000826200056a57506001620002f6565b816200057957506000620002f6565b81600181146200059257600281146200059d57620005bd565b6001915050620002f6565b60ff841115620005b157620005b1620004fa565b50506001821b620002f6565b5060208310610133831016604e8410600b8410161715620005e2575081810a620002f6565b620005ee838362000510565b8060001904821115620006055762000605620004fa565b029392505050565b60006200061e60ff84168362000559565b9392505050565b6000816000190483118215151615620006425762000642620004fa565b500290565b600082198211156200065d576200065d620004fa565b500190565b600181811c908216806200067757607f821691505b6020821081036200069857634e487b7160e01b600052602260045260246000fd5b50919050565b610d2a80620006ae6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063893d20e811610097578063a457c2d711610066578063a457c2d714610217578063a9059cbb1461022a578063dd62ed3e1461023d578063f2fde38b1461027657600080fd5b8063893d20e8146101c65780638da5cb5b146101eb57806395d89b41146101fc578063a0712d681461020457600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461018057806370a0823114610193578063715018a6146101bc57600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610289565b60405161011a9190610af2565b60405180910390f35b610136610131366004610b5e565b61031b565b604051901515815260200161011a565b6003545b60405190815260200161011a565b610136610166366004610b88565b610331565b60045460405160ff909116815260200161011a565b61013661018e366004610b5e565b61039a565b61014a6101a1366004610bc4565b6001600160a01b031660009081526001602052604090205490565b6101c46103d0565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200161011a565b6000546001600160a01b03166101d3565b61010d610486565b610136610212366004610bdf565b610495565b610136610225366004610b5e565b610503565b610136610238366004610b5e565b610552565b61014a61024b366004610bf8565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101c4610284366004610bc4565b61055f565b60606006805461029890610c2b565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490610c2b565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b5050505050905090565b600061032833848461062b565b50600192915050565b600061033e848484610750565b610390843361038b85604051806060016040528060288152602001610cd1602891396001600160a01b038a16600090815260026020908152604080832033845290915290205491906108ee565b61062b565b5060019392505050565b3360008181526002602090815260408083206001600160a01b0387168452909152812054909161032891859061038b90866105c5565b6000546001600160a01b0316331461042f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60606005805461029890610c2b565b600080546001600160a01b031633146104f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610426565b6104fa3383610928565b5060015b919050565b6000610328338461038b85604051806060016040528060258152602001610cf9602591393360009081526002602090815260408083206001600160a01b038d16845290915290205491906108ee565b6000610328338484610750565b6000546001600160a01b031633146105b95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610426565b6105c281610a0e565b50565b6000806105d28385610c7b565b9050838110156106245760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610426565b9392505050565b6001600160a01b03831661068d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610426565b6001600160a01b0382166106ee5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610426565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166107cc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610426565b6001600160a01b03821661082e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610426565b61086b81604051806060016040528060268152602001610cab602691396001600160a01b03861660009081526001602052604090205491906108ee565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461089a90826105c5565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107439085815260200190565b600081848411156109125760405162461bcd60e51b81526004016104269190610af2565b50600061091f8486610c93565b95945050505050565b6001600160a01b03821661097e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610426565b60035461098b90826105c5565b6003556001600160a01b0382166000908152600160205260409020546109b190826105c5565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a029085815260200190565b60405180910390a35050565b6001600160a01b038116610a8a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610426565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600060208083528351808285015260005b81811015610b1f57858101830151858201604001528201610b03565b81811115610b31576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146104fe57600080fd5b60008060408385031215610b7157600080fd5b610b7a83610b47565b946020939093013593505050565b600080600060608486031215610b9d57600080fd5b610ba684610b47565b9250610bb460208501610b47565b9150604084013590509250925092565b600060208284031215610bd657600080fd5b61062482610b47565b600060208284031215610bf157600080fd5b5035919050565b60008060408385031215610c0b57600080fd5b610c1483610b47565b9150610c2260208401610b47565b90509250929050565b600181811c90821680610c3f57607f821691505b602082108103610c5f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c8e57610c8e610c65565b500190565b600082821015610ca557610ca5610c65565b50039056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa164736f6c634300080d000a";

type ERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Token__factory extends ContractFactory {
  constructor(...args: ERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    decimal_: BigNumberish,
    _cappedSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Token> {
    return super.deploy(
      name_,
      symbol_,
      decimal_,
      _cappedSupply,
      overrides || {}
    ) as Promise<ERC20Token>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    decimal_: BigNumberish,
    _cappedSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimal_,
      _cappedSupply,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Token {
    return super.attach(address) as ERC20Token;
  }
  override connect(signer: Signer): ERC20Token__factory {
    return super.connect(signer) as ERC20Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TokenInterface {
    return new utils.Interface(_abi) as ERC20TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Token {
    return new Contract(address, _abi, signerOrProvider) as ERC20Token;
  }
}