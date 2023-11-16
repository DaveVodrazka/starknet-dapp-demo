import { ConnectedStarknetWindowObject } from "starknetkit";
import { sendEth } from "../api";
import { DAVID_TESTNET_ADDRESS } from "../constants";

type Props = {
  wallet?: ConnectedStarknetWindowObject;
};

export const Transfer = ({ wallet }: Props) => {
  if (!wallet) {
    return null;
  }

  const handleClick = () => {
    const toAddress = (
      document.getElementById("to-address") as HTMLInputElement
    )?.value;
    const amount = (document.getElementById("amount") as HTMLInputElement)
      ?.value;

    sendEth(wallet!.account, toAddress, amount);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <label>
        To address:{" "}
        <input
          style={{ width: "66ch" }}
          id="to-address"
          name="to-address"
          type="text"
          defaultValue={DAVID_TESTNET_ADDRESS}
          placeholder="0x123"
        />
      </label>
      <label>
        Amount:{" "}
        <input id="amount" name="amount" type="number" placeholder="1000" />
      </label>
      <button onClick={handleClick}>SEND</button>
    </div>
  );
};
