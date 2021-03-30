import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Table from "../utils/Table/DashBoardTable";
import ToolsBar from "../components/ToolsBar/ToolsBar";
import Form from "../components/Form/Form";
import Button from "../utils/Button/Button";
import { useState, useEffect } from "react";
import socket from "../socket.io";

export interface CoinPriceList {
  name: string;
  abbreviation: string;
  price: number;
}
export interface CoinList {
  name: string;
  symbol: string;
  subscribed: boolean;
}

export default function Dashboard() {
  const [formState, setFormState] = useState<boolean>(false);
  const [coinPriceList, setCoinPriceList] = useState<CoinPriceList[] | null>(
    null
  );
  const [coinList, setCoinList] = useState<CoinList[]>([]);
  const headers = ["coin", "price"];
  const showHideForm = () => {
    setFormState((prevformState) => !prevformState);
  };
  const subscriptionPayload = localStorage.getItem("id");

  // get subscibed coin price on dashboard
  useEffect(() => {
    socket.open();
    socket.emit("averageprice", `${subscriptionPayload}`);
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on("allPrice", (res: CoinPriceList[]) => {
      setCoinPriceList(res);
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.off("allPrice");
    };
  }, []);

  // get add coin form selection list
  useEffect(() => {
    socket.emit("getCoinList", `${subscriptionPayload}`);
    socket.on("coinList", (res: CoinList[]) => {
      setCoinList(res);
    });

    return () => {
      socket.off("coinList");
    };
  }, []);

  return (
    <>
      <Header />
      <Table headers={headers} rows={coinPriceList!} />
      <Form show={formState} onSave={showHideForm} selection={coinList} />
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
