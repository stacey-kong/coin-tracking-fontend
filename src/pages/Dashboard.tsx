import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Table from "../utils/Table/Table";
import ToolsBar from "../components/ToolsBar/ToolsBar";
import Form from "../components/form/form";
import Button from "../utils/Button/Button";
import { useState, useEffect } from "react";
import socketIOClient  from "socket.io-client";

export default function Dashboard() {
  const [formState, setFormState] = useState<boolean>(false);
  const [coinPriceList, setCoinPriceList] = useState<Object[]>([
    { name: "Bitcoin", price: 55994 },
    { name: "Ethereum", price: 1781.4 },
    { name: "FTX Token", price: 39.144 },
    { name: "LINA", price: 0.10026 },
  ]);
  const headers = [
    "Coins",
    "Price",
    // "Target Momentum",
    // "Alarm Times",
    // "History High",
    // "History Low",
  ];

  const showHideForm = () => {
    setFormState((prevformState) => !prevformState);
  };

  useEffect(() => {
    const socket = socketIOClient("localhost:9010");
    socket.on("coinprice", (res) => {
      setCoinPriceList(res);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Table headers={headers} rows={coinPriceList!} />
      <Form show={formState} onSave={showHideForm} />
      <div className="fixed bottom-0 w-full">
        <ToolsBar>
          <Button text="ADD" onclick={showHideForm} />
          <Button text="MODIFY" onclick={showHideForm} />
        </ToolsBar>
        <Banner />
      </div>
    </>
  );
}
