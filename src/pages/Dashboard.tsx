import { useState, useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import socket from "../socket.io";
import subscriptionService, {
  subscriptioAction,
} from "../service/subscriptionService";
import Popup, { PopupData } from "../components/Popup/Popup";
import { CoinStatsProps } from "../components/Form/AddCoinForm";
import { loadingActions } from "../redux/Loading/loading.action";
import Table from "../utils/Table/DashBoardTable";
import Button from "../utils/Button/Button";

const FilterForm = lazy(() => import("../components/Form/FilterForm"));
const AddCoinForm = lazy(() => import("../components/Form/AddCoinForm"));
const ToolsBar = lazy(() => import("../components/ToolsBar/ToolsBar"));

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
  const [coinPriceList, setCoinPriceList] =
    useState<CoinPriceList[] | null>(null);
  const [coinList, setCoinList] = useState<CoinList[] | null>(null);
  const [customList, setCustomList] = useState<CoinPriceList[] | null>(null);
  const [custom, setCustom] = useState<boolean>(false);
  const subscriptionPayload = localStorage.getItem("id");
  const headers = ["coin", "price"];
  const [popupState, setPopupState] = useState<PopupData>({
    open: false,
    icon: "",
    title: "",
    message: "",
    button: "",
  });
  const dispatch = useDispatch();

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

  const getsubscription = () => {

    const data = {
      type: subscriptioAction.QUERY,
      userId: subscriptionPayload ?? "",
    };

    subscriptionService(data).then((res) => {
      setCoinList(res.message.data.coin);
    });
  };

  // add or delete coin on tracking board
  const addScription = (Coin: string) => {
    dispatch(loadingActions.loading());
    const data = {
      type: subscriptioAction.ADD,
      coin: Coin,
      userId: subscriptionPayload ?? "",
    };
    subscriptionService(data).then((res) => {
      dispatch(loadingActions.complete());
      setCoinList(res.message.data.coin);
      if (!res.error) {
        setPopupState({
          open: true,
          icon: "success",
          title: "Subscribed",
          message: res.message.message,
          button: "OK",
        });
      } else {
        setPopupState({
          open: true,
          icon: "error",
          title: "Something went wrong",
          message: res.message.message,
          button: "OK",
        });
      }
    });

    showHideForm("filter");
  };

  const deleteCoin = (Coin: string) => {
    dispatch(loadingActions.loading());
    const data = {
      type: subscriptioAction.DELETE,
      coin: Coin,
      userId: subscriptionPayload ?? "",
    };
    subscriptionService(data).then((res) => {
      setCoinList(res.message.data.coin);
      dispatch(loadingActions.complete());
    });
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

  const closePopup = () => {
    setPopupState((prevState) => ({
      ...prevState,
      open: false,
    }));
    window.location.reload();
  };

  useEffect(() => {
    if (coinList && coinPriceList) {
      let coin = coinList.map((coinList) => {
        if (coinList.subscribed) {
          return coinList.symbol;
        }
      });
      let customList = coinPriceList.filter((coinPriceList) => {
        if (coin.includes(coinPriceList.abbreviation)) {
          return coinPriceList;
        }
      });
      setCustomList(customList);
    }
  }, [coinList,coinPriceList]);

  useEffect(() => {
    // console.log("price reload")
    dispatch(loadingActions.loading());
    socket.open();
    socket.on("price", (res: CoinPriceList[]) => {
      setCoinPriceList(res);
    });
    socket.on("firstloaded", (res: CoinPriceList[]) => {
      setCoinPriceList(res);
      getsubscription();
      dispatch(loadingActions.complete());
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.off("price");
      socket.close();
    };
  }, []);
  // console.log("dashborard reload")
  return (
    <div className="w-full h-full">
      <div className="h-5/6">
        {custom ? (
          <Table
            headers={headers}
            rows={customList!}
            delete={deleteCoin}
            filter={() => setCustom((prevState) => !prevState)}
            custom={custom}
          />
        ) : (
          <Table
            headers={headers}
            rows={coinPriceList!}
            filter={() => setCustom((prevState) => !prevState)}
            custom={custom}
          />
        )}
      </div>

      <AddCoinForm
        show={addCoinFormState}
        onSave={addCoin}
        onClose={closeFrom}
      ></AddCoinForm>
      {filterFormState && (
        <FilterForm
          show={filterFormState}
          onSave={addScription}
          onClose={closeFrom}
          data={coinList!}
        />
      )}

      <div className="self-end h-1/6">
        <ToolsBar>
          <Button text="Filter" onclick={() => showHideForm("filter")} />
          <Button text="Add" onclick={() => showHideForm("add")} />
        </ToolsBar>
      </div>

      <Popup data={popupState} onClose={closePopup} />
    </div>
  );
}
