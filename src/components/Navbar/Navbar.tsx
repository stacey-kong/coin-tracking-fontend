import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../dog.svg";

export default function Navbar() {
  const navigation = ["Coin", "Wallet", "function1", "function2"];
  const location = useLocation();
  const tabNames =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  const initTabs =
    navigation.indexOf(tabNames) === -1 ? 0 : navigation.indexOf(tabNames);

  const [open, setopen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(initTabs);

  return (
    <>
      {/* navbar wrapper */}
      <div className="w-full h-full flex justify-between bg-blue-300 md:h-20 items-center relative flex-1">
        <img src={logo} alt="doglogo" className="h-10 m-auto mx-0 " />
        <h2 className="text-indigo-700 font-black text-lg md:text-3xl absolute inset-x-1/4 text-center w-1/2">
          Check Your Coins!
        </h2>

        {/* navmenu on pc site */}
        <div className="hidden md:block z-10">
          <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item, itemIdx) => (
              <Link
                to={`${item === "Coin" ? "/" : item.toLowerCase()}`}
                key={item}
                className="w-full"
              >
                <div
                  className={`${
                    itemIdx === activeTab
                      ? "bg-blue-800  text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 w-full rounded-md text-sm font-medium`}
                  onClick={() => {
                    setActiveTab(itemIdx);
                  }}
                >
                  {item}
                </div>
              </Link>
            ))}
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
        } w-full z-40`}
        onClick={(e) => {
          e.stopPropagation();
          setopen(false);
        }}
      >
        <div
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full bg-blue-300"
        >
          {navigation.map((item, itemIdx) => (
            <Link
              to={`${item === "Coin" ? "/" : item.toLowerCase()}`}
              key={item}
              className="w-full"
            >
              <div
                className={`${
                  itemIdx === activeTab
                    ? "bg-blue-800"
                    : "hover:bg-gray-700 hover:text-white"
                } px-3 py-2 w-full rounded-md text-sm font-medium`}
                onClick={() => {
                  setActiveTab(itemIdx);
                  setopen(false)
                }}
              >
                {item}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
