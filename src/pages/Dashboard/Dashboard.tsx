import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Table from "../../utils/Table/Table";
import ToolsBar from "../../components/ToolsBar/ToolsBar";
import Form from "../../components/form/form";
import Button from "../../utils/Button/Button";
import { useState } from "react";
const coinList = [
  { name: "BTC", target: "20%", times: "0", high: true, low: false },
  { name: "ETH", target: "10%", times: "0", high: true, low: false },
  { name: "ETC", target: "30%", times: "0", high: true, low: false },
  { name: "DOGE", target: "10%", times: "0", high: true, low: false },
];

export default function Dashboard() {
  const [formState, setFormState] = useState<boolean>(false);
  const headers = [
    "Coins",
    "Target Momentum",
    "Alarm Times",
    "History High",
    "History Low",
  ];

  const showHideForm = () => {
    setFormState((prevformState) => !prevformState);
  };
  return (
    <>
      <Header />
      <Table headers={headers} rows={coinList} />
      <Form show={formState} />
      <div className="fixed bottom-0 w-full">
        <ToolsBar>
          <Button text="ADD" onclick={showHideForm} />
          <Button text="MODIFY" onclick={showHideForm} />
        </ToolsBar>
        <Banner />
      </div>
    </>
  );
}
