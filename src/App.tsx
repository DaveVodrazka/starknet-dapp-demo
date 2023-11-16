import starknetBackground from "./assets/starknet-bg.png";
import styles from "./App.module.css";
import { ConnectWallet } from "./components/ConnectWallet";
import { useState } from "react";
import { ConnectedStarknetWindowObject } from "starknetkit";
import { TotalSupply } from "./components/TotalSupply";
import { Transfer } from "./components/Transfer";

export const App = () => {
  const [wallet, setWallet] = useState<
    ConnectedStarknetWindowObject | undefined
  >();

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${starknetBackground})`,
      }}
    >
      <TotalSupply />
      <ConnectWallet wallet={wallet} setWallet={setWallet} />
      {!!wallet && (
        <div className="container">
          <p>Connected address: {wallet.account.address}</p>{" "}
        </div>
      )}
      <Transfer wallet={wallet} />
    </div>
  );
};
