import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Table from "../utils/Table/Table";
import ToolsBar from "../components/ToolsBar/ToolsBar";
import Form from "../components/form/form";
import Button from "../utils/Button/Button";
import { useState, useEffect } from "react";
import socket from "../socket.io";

export interface CoinPriceList {
  name: string;
  abbreviation: string;
  price: number;
}

export default function Dashboard() {
  const [formState, setFormState] = useState<boolean>(false);
  const [coinPriceList, setCoinPriceList] = useState<CoinPriceList[] | null>(
    null
  );
  const headers = ["coin", "price"];
  const showHideForm = () => {
    setFormState((prevformState) => !prevformState);
  };

  useEffect(() => {
    socket.emit("averagePrice");
    socket.on("Price", (res: CoinPriceList[]) => {
      setCoinPriceList(res);
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.disconnect();
    };
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
