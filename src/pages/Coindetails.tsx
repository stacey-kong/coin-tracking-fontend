import { useParams } from "react-router";
import { useEffect, useState } from "react";
import socket from "../socket.io";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Table from "../utils/Table/CoinDetailTable";

export interface CoinPrice {
  exchange: string;
  price: number;
}
export default function CoinDetails() {
  const [coinPrice, setCoinPrice] = useState<CoinPrice[] | null>(null);
  const headers = ["exchange", "price"];
  const  {coinname}  = useParams<{coinname:string}>();

  useEffect(() => {
    socket.open();
    console.log(coinname)
    socket.emit("coinprice",`${coinname}`);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on(`${coinname}`, (res: CoinPrice[]) => {
      console.log(res)
      setCoinPrice(res);
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.off(`${coinname}`);
    };
  }, []);

  return (
    <>
      <Header />
      <Table headers={headers} rows={coinPrice!} />

      <div className="fixed bottom-0 w-full">
        <Banner />
      </div>
    </>
  );
}
