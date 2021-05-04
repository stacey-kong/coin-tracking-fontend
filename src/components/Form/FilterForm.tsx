import { CoinList } from "../../pages/Dashboard";
import SelectionList, {
  coinSelection,
  defaultSelection,
} from "../SelectMenus/SelectionList";
import { useState, useEffect, useRef } from "react";
import socket from "../../socket.io";

interface FormProps {
  show: boolean;
  onSave: (arg: any) => void;
  onClose: (arg: string) => void;
}
const currency = ["USD", "USDT", "BTC"];

export default function Form(props: FormProps) {
  const showHideClassName = props.show ? "flex" : "hidden";
  const [coinList, setCoinList] = useState<CoinList[]>([]);
  const [selectedcurrency, setSelectedCurrency] = useState<string>("USD");
  const [addedSelection, setAddedSelection] = useState<string | null>("");
  const subscriptionPayload = localStorage.getItem("id");

  // get add coin form selection list
  // useEffect(
  //   return () => {
  //     socket.off("coinList");
  //   };
  // }, []);

  const coinSelection = {
    type: "coinList",
    children: coinList,
  };
  const currencySelection = {
    type: "default",
    children: currency,
  };
  const openSelection = () => {
    socket.emit("getCoinList", `${subscriptionPayload}`);
    socket.on("coinList", (res: CoinList[]) => {
      setCoinList(res);
    });
  };

  const onSelected = (selection: string) => {
    setAddedSelection(selection);
  };

  const handleCurrencySelectionChange = (selection: string) => {
    setSelectedCurrency(selection);
  };

  const resetForm = () => {
    setAddedSelection("");
    setSelectedCurrency("USD");
  };

  return (
    <form
      // action="#"
      // method="POST"
      onSubmit={(event: React.FormEvent) => {
        event?.preventDefault();
      }}
      className={`${showHideClassName} z-10 w-full h-full fixed top-0 left-0`}
      onClick={() => props.onClose("filter")}
    >
      <div
        className="shadow overflow-visible sm:rounded-md relative lg:w-1/3 w-3/4 m-auto bg-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="px-4 py-5 h-2/3 bg-white sm:p-6">
          <div className="w-full flex justify-end">
            <span
              className="px-3 pb-1 inline-flex text-s leading-6 font-semibold rounded-full bg-gray-300 text-black-800 "
              onClick={() => props.onClose("filter")}
            >
              x
            </span>
          </div>
          <SelectionList
            element={coinSelection as coinSelection}
            label="Filter"
            placeHolder="Coin"
            value={addedSelection ?? ""}
            selectAction={onSelected}
            onclick={openSelection}
          />

          <SelectionList
            element={currencySelection as defaultSelection}
            label="Currency"
            value={selectedcurrency}
            placeHolder="Base Currency"
            selectAction={handleCurrencySelectionChange}
          />
        </div>
        <div className="px-4 py-3 mt-2  mb-0 bg-gray-50 text-right sm:px-6">
          <button
            // type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              props.onSave(addedSelection);
              resetForm();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
