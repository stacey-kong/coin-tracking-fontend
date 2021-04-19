import { useState, useEffect, useRef } from "react";
import socket from "../../socket.io";

import SelectionList, { defaultSelection } from "../SelectMenus/SelectionList";

interface FormProps {
  show: boolean;
  onSave: (arg: any) => void;
  onClose: (arg: string) => void;
}

export default function Form(props: FormProps) {
  const showHideClassName = props.show ? "flex" : "hidden";

  const [addedSelection, setAddedSelection] = useState<string | null>("");
  const subscriptionPayload = localStorage.getItem("id");
  const currency = ["USD", "USDT", "BTC"];
  const marketType = ["Spot", "Perpetual"];
  const currencySelection = {
    type: "default",
    children: currency,
  };

  const marketTypeSelection = {
    type: "default",
    children: marketType,
  };


  return (
    <form
      // action="#"
      // method="POST"
      onSubmit={(event: React.FormEvent) => {
        event?.preventDefault();
      }}
      className={`${showHideClassName} z-10 w-full h-full fixed top-0 left-0`}
      onClick={() => props.onClose("add")}
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
              onClick={() => props.onClose("add")}
            >
              x
            </span>
          </div>
          <div>
            <label
              htmlFor="coin"
              className="block text-s font-medium text-gray-700"
            >
              Coin
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="coin"
                id="coin"
                className="pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md"
                placeholder="Enter the Coin Symbol"
              />
            </div>
          </div>
          <div className="mt-4">
            <SelectionList
              element={currencySelection as defaultSelection}
              label="Currency"
              placeHolder="USD"
            />
          </div>
          <div className="mt-4">
            <SelectionList
              element={marketTypeSelection as defaultSelection}
              label="Market Type"
              placeHolder="Spot"
            />
          </div>
        </div>
        <div className="px-4 py-3 mt-2  mb-0 bg-gray-50 text-right sm:px-6">
          <button
            // type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => props.onSave(addedSelection)}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
