import starknetBackground from "./assets/starknet-bg.png";

export const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${starknetBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
};
