import logo from "../../dog.svg";

export default function Header() {
  return (
    <div className="w-full h-14 flex justify-between bg-blue-300 md:h-20 items-center relative">
      <img src={logo} alt="doglogo" className="h-10 m-auto mx-0 " />
      <h2 className="text-indigo-700 font-black text-lg md:text-3xl absolute inset-x-1/4 text-center">
        Coin WalletS
      </h2>
    </div>
  );
}
