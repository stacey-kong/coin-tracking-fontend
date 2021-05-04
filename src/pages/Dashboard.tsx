import { Layout2 } from "../components/Layout/Layout";
import Table from "../utils/Table/DashBoardTable";
import ToolsBar from "../components/ToolsBar/ToolsBar";
import AddCoinForm, { CoinStatsProps } from "../components/Form/AddCoinForm";
import FilterForm from "../components/Form/FilterForm";
import Button from "../utils/Button/Button";
import { useState, useEffect, useRef } from "react";
import socket from "../socket.io";
import Popup, { PopupData } from "../components/Popup/Popup";

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

interface addCoinRes {
  status: boolean;
  message: string;
}

export default function Dashboard() {
  const [filterFormState, setfilterFormState] = useState<boolean>(false);
  const [addCoinFormState, setAddCoinFormState] = useState<boolean>(false);
  const [coinPriceList, setCoinPriceList] = useState<CoinPriceList[] | null>(
    null
  );
  const subscriptionPayload = localStorage.getItem("id");
  const headers = ["coin", "price"];
  const [popupState, setPopupState] = useState<PopupData>({
    open: false,
    icon: "",
    title: "",
    message: "",
    button: "",
  });

  const showHideForm = (form: string) => {
    switch (form) {
      case "filter":
        setfilterFormState((prevState) => !prevState);
        break;

      case "add":
        setAddCoinFormState((prevState) => !prevState);
        break;
    }
  };

  const closeFrom = (form: string) => {
    switch (form) {
      case "filter":
        setfilterFormState(false);
        break;

      case "add":
        setAddCoinFormState(false);
        break;
    }
  };

  // add or delete coin on tracking board
  const addScription = (Coin: string) => {
    socket.emit("addScription", subscriptionPayload, Coin);
    showHideForm("filter");
  };

  const deleteCoin = (Coin: string) => {
    socket.emit("deleteScription", subscriptionPayload, Coin);
  };

  //add Coin on database
  const addCoin = (props: CoinStatsProps) => {
    console.log(props);
    socket.emit("addCoin", props, function (data: addCoinRes) {
      if (data.status) {
        setPopupState({
          open: true,
          icon: "success",
          title: "Add coin success",
          message: data.message,
          button: "OK",
        });
      } else {
        setPopupState({
          open: true,
          icon: "error",
          title: "Add coin fail",
          message: data.message,
          button: "OK",
        });
      }
    });
    showHideForm("add");
  };

  // const tableStyle = {
  //   height: "85%",
  // };

  const closePopup = () => {
    setPopupState((prevState) => ({
      ...prevState,
      open: false,
    }));
    window.location.reload();
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
      <div className="w-full h-full">
        <div className="h-5/6">
          <Table headers={headers} rows={coinPriceList!} delete={deleteCoin} />
        </div>
        <AddCoinForm
          show={addCoinFormState}
          onSave={addCoin}
          onClose={closeFrom}
        ></AddCoinForm>
        <FilterForm
          show={filterFormState}
          onSave={addScription}
          onClose={closeFrom}
        />
        <div className="self-end">
          <ToolsBar>
            <Button text="Filter" onclick={() => showHideForm("filter")} />
            <Button text="Add" onclick={() => showHideForm("add")} />
          </ToolsBar>
        </div>
      </div>
      <Popup data={popupState} onClose={closePopup} />
    </>
  );
}
