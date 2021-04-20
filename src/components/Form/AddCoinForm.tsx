import React, { useState, useEffect, useRef } from "react";
import socket from "../../socket.io";

import SelectionList, { defaultSelection } from "../SelectMenus/SelectionList";

interface FormProps {
  show: boolean;
  onSave: (arg: any) => void;
  onClose: (arg: string) => void;
}

export interface CoinStatsProps {
  name: string;
  symbol: string;
  currency: Currency;
  marketType: MarketType;
}

enum Currency {
  USD = "USD",
  USDT = "USDT",
  BTC = "BTC",
}

enum MarketType {
  SPOT = "Spot",
  PERPETUAL = "Perpetual",
}

const currency = ["USD", "USDT", "BTC"];
const marketType = ["Spot", "Perpetual"];
const defaultFormState = {
  name: "",
  symbol: "",
  currency: Currency.USD,
  marketType: MarketType.SPOT,
};

export default function Form(props: FormProps) {
  const showHideClassName = props.show ? "flex" : "hidden";
  const [formState, setFormState] = useState<CoinStatsProps>(defaultFormState);

  const currencySelection = {
    type: "default",
    children: currency,
  };

  const marketTypeSelection = {
    type: "default",
    children: marketType,
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    const newstate = { ...formState, [name!]: value };

    setFormState(newstate);
  };

  const handleCurrencySelectionChange = (selecion: string) => {
    let selectedCurrency;

    if (selecion === "USDT") {
      selectedCurrency = Currency.USDT;
    } else if (selecion === "BTC") {
      selectedCurrency = Currency.BTC;
    } else {
      selectedCurrency = Currency.USD;
    }
    const newstate = { ...formState, currency: selectedCurrency };

    setFormState(newstate);
  };

  const handleMarketTypeSelectionChange = (selecion: string) => {
    let selectedMarket;

    if (selecion === "Perpetual") {
      selectedMarket = MarketType.PERPETUAL;
    } else {
      selectedMarket = MarketType.SPOT;
    }
    const newstate = { ...formState, market: selectedMarket };

    setFormState(newstate);
  };

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  return (
    <form
      id="addCoinForm"
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
              htmlFor="name"
              className="block text-s font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                className="pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md"
                placeholder="Enter the Coin Name"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="symbol"
              className="block text-s font-medium text-gray-700"
            >
              Symbol
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="symbol"
                id="symbol"
                value={formState.symbol}
                className="pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md"
                placeholder="Enter the Coin Symbol"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <SelectionList
              element={currencySelection as defaultSelection}
              label="Currency"
              placeHolder="USD"
              value={formState.currency}
              selectAction={handleCurrencySelectionChange}
            />
          </div>
          <div className="mt-4">
            <SelectionList
              element={marketTypeSelection as defaultSelection}
              label="Market Type"
              placeHolder="Spot"
              value={formState.marketType}
              selectAction={handleMarketTypeSelectionChange}
            />
          </div>
        </div>
        <div className="px-4 py-3 mt-2  mb-0 bg-gray-50 text-right sm:px-6">
          <button
            // type="submit"
            onClick={() => {
              props.onSave(formState);
              resetForm();
            }}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
