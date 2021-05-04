import { Layout2 } from "../components/Layout/Layout";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { CoinList } from "./Dashboard";
import socket from "../socket.io";
import SelectionList, {
  coinSelection,
} from "../components/SelectMenus/SelectionList";

export default function Wallet() {
  const history = useHistory();
  const [coinList, setCoinList] = useState<CoinList[]>([]);
  const openSelection = () => {
    socket.on("coinList", (res: CoinList[]) => {
      setCoinList(res);
    });
  };
  const coinSelection = {
    type: "coinList",
    children: coinList,
  };
  return (
    <>
      <div className="h-1/4">
        <SelectionList
          element={coinSelection as coinSelection}
          label="Select your coin"
          placeHolder="Coin"
          value={""}
          onclick={openSelection}
        />
      </div>
      <div className="h-1/4">
        <table className="text-left space-around w-full h-full">
          <tbody>
            <tr>
              <th>Today's total</th>
            </tr>
            <tr>
              <th>This week's total</th>
            </tr>
            <tr>
              <th>This month's total</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-end mt-10 z-10">
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
