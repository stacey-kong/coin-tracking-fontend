import { useEffect, useState } from "react";
import { CoinList } from "../../pages/Dashboard";

export function coinSelection(
  children: CoinList[],
  onclick: (selsction: string) => void
) {
  return children.map(function (selection, index) {
    return (
      <li
        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
        key={index}
        id={`listbox-option-${index}`}
        role="option"
        onClick={() => onclick(selection.symbol)}
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
  });
}

export function defaultSelection(
  children: string[],
  onclick: (selsction: string) => void
) {
  return children.map(function (selection, index) {
    return (
      <li
        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
        key={index}
        id={`listbox-option-${index}`}
        role="option"
        onClick={() => onclick(selection)}
      >
        <div className="flex items-center">
          <span className="font-normal ml-3 block truncate">{selection}</span>
        </div>
      </li>
    );
  });
}
