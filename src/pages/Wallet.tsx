import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { CoinList } from "./Dashboard";
import LineChart from "../components/Charts/LineChart";
import { useDispatch } from "react-redux";
import { loadingActions } from "../redux/Loading/loading.action";
import lendingService, {
  lendingAction,
  Timezone,
} from "../service/lendingService";
interface lendingInterest {
  today: number;
  week: number;
  month: number;
}

interface Interest {
  x: number;
  y: number;
}

interface lendingInfo {
  amount: number;
  interest: lendingInterest;
}

const lendingCoins = ["USD", "USDT", "BTC", "ETH"];

export default function Wallet() {
  const history = useHistory();
  const [addedSelection, setAddedSelection] = useState<string>("USD");
  const [coinSelectionOpen, setcoinSelectionOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [interest, setInterest] = useState<lendingInterest | null>(null);
  const [dailyInterest, setdailyInterest] = useState<Interest[] | null>(null);
  const [queryLocaltime, setQueryLocaltime] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);
  const subscriptionPayload = localStorage.getItem("id");
  const oneDay = 8.64e7;

  const dispatch = useDispatch();

  const updateLendingValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const reviseAmount = () => {
    dispatch(loadingActions.loading());

    setQueryLocaltime(false);
  };

  const onClickSummary = () => {
    const now = new Date();
    const noInweek = now.getDay();
    const monWeek = now.setHours(0, 0, 0, 0) - (noInweek - 1) * oneDay;
    dispatch(loadingActions.loading());
    setActiveTab(1);
    setTimestamp(monWeek);
  };

  const WeekReport = (type: String) => {
    switch (type) {
      case "prev":
        // socket.emit(
        //   "dailyLending",
        //   subscriptionPayload,
        //   timestamp - 7 * oneDay,
        //   7
        // );
        setTimestamp((prev) => prev - 7 * oneDay);
        break;
        // case "next":
        //   socket.emit(
        //     "dailyLending",
        //     subscriptionPayload,
        //     timestamp + 7 * oneDay,
        //     7
        //   );
        setTimestamp((prev) => prev + 7 * oneDay);
        break;
    }
  };

  const onSelected = (selection: string) => {
    setcoinSelectionOpen((prev) => !prev);
    setAddedSelection(selection);
  };

  const getlending = () => {
    const data = {
      type: lendingAction.QUERY,
      userId: subscriptionPayload ?? "",
      coin: addedSelection,
      zoneType: queryLocaltime ? Timezone.LOCAL : Timezone.UTC,
    };

    lendingService(data).then((res: lendingInfo) => {
      dispatch(loadingActions.complete());
      setAmount(res.amount);
      setInterest(res.interest);
    });
  };

  useEffect(() => {
    dispatch(loadingActions.loading());
    getlending();
  }, [queryLocaltime]);
  return (
    <div className="pt-2 pb-4 px-4 h-full box-border">
      <div className="h-1/2">
        <div className="mt-1 relative">
          <button
            type="button"
            className="relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={() => setcoinSelectionOpen((prevState) => !prevState)}
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {addedSelection ? addedSelection : "Coin"}
              </span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <ul
            className={`${
              coinSelectionOpen ? "" : "hidden"
            } absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm`}
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {lendingCoins.map(function (coin, index) {
              return (
                <li
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                  key={Math.random()}
                  id={`listbox-option-${index}`}
                  role="option"
                  onClick={() => onSelected(coin)}
                >
                  {coin}
                </li>
              );
            })}
          </ul>
        </div>
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
