import {
  ConnectedStarknetWindowObject,
  connect,
  disconnect,
} from "starknetkit";
import styles from "./ConnectWallet.module.css";

type Props = {
  wallet?: ConnectedStarknetWindowObject;
  setWallet: (wallet: ConnectedStarknetWindowObject | undefined) => void;
};

export const ConnectWallet = ({ wallet, setWallet }: Props) => {
  const handleConnect = async () => {
    const wallet = await connect({ modalMode: "alwaysAsk" });

    if (wallet && wallet.isConnected) {
      setWallet(wallet);
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    setWallet(undefined);
  };

  if (!wallet) {
    return (
      <button className={styles.walletButton} onClick={handleConnect}>
        Connect Wallet
      </button>
    );
  }

  return (
    <button className={styles.walletButton} onClick={handleDisconnect}>
      Disconnect
    </button>
  );
};
