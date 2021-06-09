import { useState, useEffect, lazy } from "react";
import { useHistory, } from "react-router";
import { CoinList } from "./Dashboard";
import { useDispatch } from "react-redux";
import socket from "../socket.io";
import { coinSelection } from "../components/SelectMenus/SelectionList";
import { loadingActions } from "../redux/Loading/loading.action";

const SelectionList = lazy(
  () => import("../components/SelectMenus/SelectionList")
);
const LineChart = lazy(() => import("../components/Charts/LineChart"));

interface lendingInterest {
  today: number;
  week: number;
  month: number;
}

enum Timezone {
  LOCAL = "local",
  UTC = "UTC",
}

interface Interest {
  x: number;
  y: number;
}

export default function Wallet() {
  const history = useHistory();
  const [coinList, setCoinList] = useState<CoinList[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [interest, setInterest] = useState<lendingInterest | null>(null);
  const [dailyInterest, setdailyInterest] = useState<Interest[] | null>(null);
  const [queryLocaltime, setQueryLocaltime] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const subscriptionPayload = localStorage.getItem("id");
  const oneDay = 8.64e7;
  const openSelection = () => {
    socket.on("coinList", (res: CoinList[]) => {
      setCoinList(res);
    });
  };
  const coinSelection = {
    type: "coinList",
    children: coinList,
  };

  const dispatch = useDispatch();

  const updateLendingValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const reviseAmount = () => {
    dispatch(loadingActions.loading());
    socket.emit("reviseLending", subscriptionPayload, amount);
    setQueryLocaltime(false);
  };

  const onClickSummary = () => {
    const now = new Date();
    const noInweek = now.getDay();
    const monWeek = now.setHours(0, 0, 0, 0) - (noInweek - 1) * oneDay;
    dispatch(loadingActions.loading());
    socket.emit("dailyLending", subscriptionPayload, monWeek);
    setActiveTab(1);
    setTimestamp(monWeek);
  };

  const WeekReport = (type: String) => {
    switch (type) {
      case "prev":
        socket.emit(
          "dailyLending",
          subscriptionPayload,
          timestamp - 7 * oneDay,
          7
        );
        setTimestamp((prev) => prev - 7 * oneDay);
        break;
      case "next":
        socket.emit(
          "dailyLending",
          subscriptionPayload,
          timestamp + 7 * oneDay,
          7
        );
        setTimestamp((prev) => prev + 7 * oneDay);
        break;
    }
  };

  useEffect(() => {
    socket.open();
    dispatch(loadingActions.loading());
    queryLocaltime
      ? socket.emit("lending", subscriptionPayload, Timezone.LOCAL)
      : socket.emit("lending", subscriptionPayload, Timezone.UTC);

    return () => {
      socket.off("lending");
      socket.close();
    };
  }, [queryLocaltime]);

  useEffect(() => {
    socket.on("lendingInterest", (res: [lendingInterest, number]) => {
      setInterest(res[0]);
      setAmount(res[1]);
      dispatch(loadingActions.complete());
    });

    // CLEAN UP THE EFFECT
    return () => {
      socket.off("lendingInterest");
    };
  }, []);

  useEffect(() => {
    socket.on("dailyInterest", (res: Interest[]) => {
      console.log(res);
      setdailyInterest(res);
      dispatch(loadingActions.complete());
    });

    // CLEAN UP THE EFFECT
    return () => {
      socket.off("lendingInterest");
    };
  }, []);
  return (
    <div className="pt-2 pb-4 px-4 h-full box-border">
      <div className="h-1/2">
        <SelectionList
          element={coinSelection as coinSelection}
          label="Select your coin"
          placeHolder="Coin"
          value={""}
          onclick={openSelection}
        />
        <div className="h-3/4">
          <div className="inline-flex my-4 w-full h-1/2">
            <h3 className="w-1/2 text-2xl">Lending Amount</h3>
            <input
              className="w-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md border-none text-right"
              type="text"
              value={amount}
              onChange={updateLendingValue}
            ></input>
          </div>
          <div className="items-center justify-between flex h-1/2">
            <label>
              <input
                type="checkbox"
                id="queryTimezone"
                name="queryTimezone"
                className="mr-2"
                checked={queryLocaltime}
                onChange={() => setQueryLocaltime((prev) => !prev)}
              />
              Show in Local time
            </label>

            <span
              className="p-2 bg-blue-300 text-white text-center font-bold text-xl float-right"
              onClick={reviseAmount}
            >
              submit
            </span>
          </div>
        </div>
      </div>
      <div className="h-1/2">
        <div className="inline-flex justify-around w-full">
          <span
            className={`w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ${
              activeTab === 0 ? "ring-4 ring-indigo-200" : ""
            }`}
            onClick={() => setActiveTab(0)}
          >
            Latest
          </span>
          <span
            className={`w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m ${
              activeTab === 1 ? "ring-4 ring-indigo-200" : ""
            }`}
            onClick={onClickSummary}
          >
            Sumary
          </span>
        </div>

        <div className="mt-4 px-4 border-2 border-blue-300 h-3/4 justify-items-center items-center">
          {activeTab === 0 && (
            <table className="text-left mt-2 space-around w-full h-3/4 border-collapse">
              <tbody>
                <tr>
                  <th>Today's total</th>
                  <td>{interest?.today.toFixed(3)}</td>
                </tr>
                <tr>
                  <th>This week's total</th>
                  <td>{interest?.week.toFixed(3)}</td>
                </tr>
                <tr>
                  <th>This month's total</th>
                  <td>{interest?.month.toFixed(3)}</td>
                </tr>
              </tbody>
            </table>
          )}
          {activeTab === 1 && (
            <div>
              <div className="float-right">
                <span
                  className="w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m"
                  onClick={() => WeekReport("prev")}
                >
                  Prev
                </span>
                <span
                  className="w-1/4 py-1 rounded-full bg-indigo-600 text-white text-center font-bold text-m "
                  onClick={() => WeekReport("next")}
                >
                  Next
                </span>
              </div>

              <LineChart data={dailyInterest!}></LineChart>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex sticky justify-end z-10 bottom-56">
        <span
          className="pl-2 pr-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to Home
        </span>
      </div>
    </div>
  );
}
