import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import socket from "../socket.io";
import { Layout2 } from "../components/Layout/Layout";
import Table from "../utils/Table/CoinDetailTable";

export interface CoinPrice {
  exchange: string;
  price: number;
}
export default function CoinDetails() {
  const [coinPrice, setCoinPrice] = useState<CoinPrice[] | null>(null);
  const headers = ["exchange", "price"];
  const { coinname } = useParams<{ coinname: string }>();
  const history = useHistory();

  useEffect(() => {
    socket.open();
    socket.emit("coinprice", `${coinname}`);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on(`${coinname}`, (res: CoinPrice[]) => {
      setCoinPrice(res);
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.off(`${coinname}`);
    };
  }, []);

  return (
    <>
      <div className="h-1/2">
        <Table headers={headers} rows={coinPrice!} />
      </div>
      <div className="w-full flex justify-end mt-10">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to Home
        </span>
      </div>
     </>
  );
}
