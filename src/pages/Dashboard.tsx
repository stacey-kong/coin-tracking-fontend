import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Table from "../utils/Table/DashBoardTable";
import ToolsBar from "../components/ToolsBar/ToolsBar";
import FilterForm from "../components/Form/FilterForm";
import Button from "../utils/Button/Button";
import { useState, useEffect, useRef } from "react";
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
  const subscriptionPayload = localStorage.getItem("id");
  const headers = ["coin", "price"];

  const showHideForm = () => {
    setFormState((prevformState) => !prevformState);
  };

  const closeFrom = () => {
    setFormState(false);
  };

  const addCoin = (Coin: string) => {
    socket.emit("addScription", subscriptionPayload, Coin);
    showHideForm();
  };

  const deleteCoin = (Coin: string) => {
    socket.emit("deleteScription", subscriptionPayload, Coin);
  };

  const tableStyle = {
    height: "55%",
  };

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

  return (
    <>
      <Header />
      <div style={tableStyle}>
        <Table headers={headers} rows={coinPriceList!} delete={deleteCoin} />
      </div>

      <FilterForm show={formState} onSave={addCoin} onClose={closeFrom} />
      <div className="fixed bottom-0 w-full">
        <ToolsBar>
          <Button text="Filter" onclick={showHideForm} />
          <Button text="Add" onclick={showHideForm} />
        </ToolsBar>
        <Banner />
      </div>
    </>
  );
}
