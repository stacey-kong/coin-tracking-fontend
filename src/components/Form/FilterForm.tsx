import { CoinList } from "../../pages/Dashboard";
import React, { useState } from "react";
import { alertActions } from "../../redux/Alert/alert.action";
import { useDispatch } from "react-redux";

interface FormProps {
  show: boolean;
  onSave: (arg: any) => void;
  onClose: (arg: string) => void;
  data: CoinList[];
}
const currency = ["USD", "USDT", "BTC"];

export default React.memo(Form, (prevProps, nextProps) => {
  if (prevProps.data === nextProps.data) {
    return true; // props are equal
  }
  return false; // props are not equal -> update the component
});

function Form(props: FormProps) {
  const showHideClassName = props.show ? "flex" : "hidden";
  const [selectedcurrency, setSelectedCurrency] = useState<string>("USD");
  const [addedSelection, setAddedSelection] = useState<string | null>("");
  const [coinSelectionOpen, setcoinSelectionOpen] = useState<boolean>(false);
  const [currencySelectionOpen, setcurrencySelectionOpen] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const onSelected = (selection: CoinList) => {
    setcoinSelectionOpen((prev) => !prev);
    if (selection.subscribed) {
      dispatch(
        alertActions.warning(
          `${selection.symbol} is already on the subscription`
        )
      );
    } else setAddedSelection(selection.symbol);
  };

  const handleCurrencySelectionChange = (selection: string) => {
    setcurrencySelectionOpen((prev) => !prev);
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

          <div className="w-full">
            <label
              id="listbox-label"
              className="block text-sm font-medium text-gray-700"
            >
              Filter
            </label>
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
                {props.data.map(function (selection, index) {
                  return (
                    <li
                      className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                      key={Math.random()}
                      id={`listbox-option-${index}`}
                      role="option"
                      onClick={() => onSelected(selection)}
                    >
                      <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">
                          {selection.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">
                          {selection.symbol}
                        </span>
                      </div>
                      <div>
                        {selection.subscribed ? (
                          <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
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
                    {selectedcurrency}
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
