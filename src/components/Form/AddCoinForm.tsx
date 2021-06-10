import React, { useState } from "react";


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

export default React.memo(Form);

function Form(props: FormProps) {
  const showHideClassName = props.show ? "flex" : "hidden";
  const [formState, setFormState] = useState<CoinStatsProps>(defaultFormState);
  const [marketSelectionOpen, setmarketSelectionOpen] = useState<boolean>(false);
  const [currencySelectionOpen, setcurrencySelectionOpen] =
    useState<boolean>(false);


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
          <div className="w-full">
            <label
              id="listbox-label"
              className="block text-sm font-medium text-gray-700"
            >
              Currency
            </label>
            <div className="mt-1 relative">
              <button
                type="button"
                className="relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() =>
                  setcurrencySelectionOpen((prevState) => !prevState)
                }
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">
                    {formState.currency}
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
                  currencySelectionOpen ? "" : "hidden"
                } absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm`}
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                {currency.map(function (selection, index) {
                  return (
                    <li
                      className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                      key={Math.random()}
                      id={`listbox-option-${index}`}
                      role="option"
                      onClick={() => handleCurrencySelectionChange(selection)}
                    >
                      <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">
                          {selection}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          </div>
          <div className="mt-4">
        <div className="w-full">
            <label
              id="listbox-label"
              className="block text-sm font-medium text-gray-700"
            >
            Market Type
            </label>
            <div className="mt-1 relative">
              <button
                type="button"
                className="relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() =>
                  setmarketSelectionOpen((prevState) => !prevState)
                }
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">
                    {formState.marketType}
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
                  marketSelectionOpen ? "" : "hidden"
                } absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm`}
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                {marketType.map(function (selection, index) {
                  return (
                    <li
                      className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                      key={Math.random()}
                      id={`listbox-option-${index}`}
                      role="option"
                      onClick={() => handleMarketTypeSelectionChange(selection)}
                    >
                      <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">
                          {selection}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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
