import {
  AccountInterface,
  Contract,
  Provider,
  constants,
  uint256,
} from "starknet";
import { ETH_ADDRESS, RPC_PROVIDER_ADDRESS } from "./constants";
import ABI from "./abi.json";

const provider = new Provider({
  rpc: {
    nodeUrl: RPC_PROVIDER_ADDRESS,
    chainId: constants.StarknetChainId.SN_GOERLI,
  },
});

const contract = new Contract(ABI, ETH_ADDRESS, provider);

export const getTotalSupply = async (): Promise<bigint> => {
  const response = await contract.call("totalSupply");
  return response as bigint;
};

export const sendEth = async (
  account: AccountInterface,
  toAddress: string,
  amount: string
) => {
  const amountUint256 = uint256.bnToUint256(BigInt(amount));
  contract.connect(account);
  await contract.invoke("transfer", [toAddress, amountUint256]);
};
