export const Transfer = () => {
  const handleClick = () => {
    const toAddress = (
      document.getElementById("to-address") as HTMLInputElement
    )?.value;
    const amount = (document.getElementById("amount") as HTMLInputElement)
      ?.value;

    // send "amount" to "toAddress"
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
