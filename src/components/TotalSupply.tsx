import { useEffect, useState } from "react";
import { getTotalSupply } from "../api";

export const TotalSupply = () => {
  const [totalSupply, setTotalSupply] = useState<bigint | undefined>();
  useEffect(() => {
    getTotalSupply().then((fetchedTotalSupply) =>
      setTotalSupply(fetchedTotalSupply)
    );
  }, []);

  if (!totalSupply) {
    return null;
  }

  return (
    <div className="container">
      <p>ETH total supply: {totalSupply.toString(10)}</p>
    </div>
  );
};
