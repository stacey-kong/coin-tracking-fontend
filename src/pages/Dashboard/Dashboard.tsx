import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Table from "../../utils/Table";

const coinList = [
  { name: "BTC", target: "20%", times: "0", high: true, low: false },
  { name: "ETH", target: "10%", times: "0", high: true, low: false },
  { name: "ETC", target: "30%", times: "0", high: true, low: false },
  { name: "DOGE", target: "10%", times: "0", high: true, low: false },
];

export default function Dashboard() {
  const headers = [
    "Coins",
    "Target Momentum",
    "Alarm Times",
    "History High",
    "History Low",
  ];
  return (
    <>
      <Header />
      <Table headers={headers} rows={coinList}></Table>
      <Banner />
    </>
  );
}
