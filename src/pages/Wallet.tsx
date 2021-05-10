import { Layout2 } from "../components/Layout/Layout";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { CoinList } from "./Dashboard";
import socket from "../socket.io";
import SelectionList, {
  coinSelection,
} from "../components/SelectMenus/SelectionList";

interface lendingInterest {
  today: number;
  week: number;
  month: number;
}

enum Timezone {
  LOCAL = "local",
  UTC = "UTC",
}

export default function Wallet() {
  const history = useHistory();
  const [coinList, setCoinList] = useState<CoinList[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [interest, setInterest] = useState<lendingInterest | null>(null);
  const [queryLocaltime, setQueryLocaltime] = useState<boolean>(false);
  const subscriptionPayload = localStorage.getItem("id");
  const openSelection = () => {
    socket.on("coinList", (res: CoinList[]) => {
      setCoinList(res);
    });
  };
  const coinSelection = {
    type: "coinList",
    children: coinList,
  };

  const updateLendingValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const reviseAmount = () => {
    socket.emit("reviseLending", subscriptionPayload, amount);
    setQueryLocaltime(false);
  };

  useEffect(() => {
    console.log(`emit lending`);
    socket.open();
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
    });
    // CLEAN UP THE EFFECT
    return () => {
      socket.off("lendingInterest");
    };
  }, []);

  return (
    <div className="px-4 py-10 h-full box-border">
      <div className="h-1/2">
        <SelectionList
          element={coinSelection as coinSelection}
          label="Select your coin"
          placeHolder="Coin"
          value={""}
          onclick={openSelection}
        />
        <div>
          <div className="inline-flex my-4 w-full h-1/2">
            <h3 className="w-1/2 text-2xl">Lending Amount</h3>
            <input
              className="w-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md border-none text-right"
              type="text"
              value={amount}
              onChange={updateLendingValue}
            ></input>
          </div>
          <div className="items-center h-1/2">
            <input
              type="checkbox"
              id="queryTimezone"
              name="queryTimezone"
              checked={queryLocaltime}
              onChange={() => setQueryLocaltime((prev) => !prev)}
            />
            <label htmlFor="queryTimezone" className="pl-2 ">
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
        <table className="text-left space-around w-full h-full">
          <tbody>
            <tr>
              <th>Today's total</th>
              <td>{interest?.today}</td>
            </tr>
            <tr>
              <th>This week's total</th>
              <td>{interest?.week}</td>
            </tr>
            <tr>
              <th>This month's total</th>
              <td>{interest?.month}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex fixed top-2/3 justify-end z-10">
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
