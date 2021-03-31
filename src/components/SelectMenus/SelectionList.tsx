import { useEffect, useState } from "react";
import { CoinList } from "../../pages/Dashboard";
import { coinSelection, defaultSelection } from "./Selections";

export interface coinSelection {
  type: "coinList";
  children: CoinList[];
}

export interface defaultSelection {
  type: "default";
  children: string[];
}

interface SelectionMenuProps {
  label?: string;
  placeHolder?: string;
  element: coinSelection | defaultSelection;
  selectAction?: (selection: string) => void;
}

export default function Selection(props: SelectionMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(props.placeHolder!);
  const addselection = function (selection: string) {
    setSelected(selection);
    setIsOpen(false);
    if (props.selectAction) {
      let selectAction = props.selectAction;
      selectAction(selection);
    }
  };
  return (
    <div className="w-full">
      <label
        id="listbox-label"
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1 relative">
        <button
          type="button"
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">{selected}</span>
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
            isOpen ? "" : "hidden"
          } absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm`}
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {props.element.type === "coinList" &&
            coinSelection(props.element.children, addselection)}
          {props.element.type === "default" &&
            defaultSelection(props.element.children, addselection)}
        </ul>
      </div>
    </div>
  );
}
