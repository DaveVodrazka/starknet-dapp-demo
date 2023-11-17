import starknetBackground from "./assets/starknet-bg.png";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${starknetBackground})`,
      }}
    ></div>
  );
};
