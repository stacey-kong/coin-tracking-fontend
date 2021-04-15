import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../dog.svg";

export default function Navbar() {
  const navigation = ["Coin", "Wallet", "function1", "function2"];
  const [open, setopen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      {/* navbar wrapper */}
      <div className="w-full h-14 flex justify-between bg-blue-300 md:h-20 items-center relative">
        <img src={logo} alt="doglogo" className="h-10 m-auto mx-0 " />
        <h2 className="text-indigo-700 font-black text-lg md:text-3xl absolute inset-x-1/4 text-center">
          Check Your Coins!
        </h2>

        {/* navmenu on pc site */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item, itemIdx) =>
              itemIdx === activeTab ? (
                <Link key={item} to="/">
                  <span
                    className="bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      setActiveTab(itemIdx);
                    }}
                  >
                    {item}
                  </span>
                </Link>
              ) : (
                <Link to={`${item.toLowerCase()}`} key={item}>
                  <span
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      setActiveTab(itemIdx);
                    }}
                  >
                    {item}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="m-auto bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <CloseIcon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setopen((prevState) => !prevState)}
              />
            ) : (
              <MenuIcon
                className="block h-6 w-6 "
                aria-hidden="true"
                onClick={() => setopen((prevState) => !prevState)}
              />
            )}
          </div>
        </div>
      </div>

      {/* navmenu on mobile site */}

      <div
        className={`${
          open ? "block" : "hidden"
        } px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full bg-blue-300`}
      >
        {navigation.map((item, itemIdx) =>
          itemIdx === activeTab ? (
            <Link key={item} to="/" className="w-full">
              <div
                className="bg-blue-800 text-white px-3 py-2 w-full rounded-md text-sm font-medium"
                onClick={() => {
                  setActiveTab(itemIdx);
                }}
              >
                {item}
              </div>
            </Link>
          ) : (
            <Link to={`${item.toLowerCase()}`} key={item} className="w-full">
              <div
                className="hover:bg-gray-700 hover:text-white px-3 py-2 w-full rounded-md text-sm font-medium"
                onClick={() => {
                  setActiveTab(itemIdx);
                }}
              >
                {item}
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
}
