import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import Table from "../utils/Table/CoinDetailTable";
import coinService, { coinAction } from "../service/coinService";
import { useDispatch } from "react-redux";
import { loadingActions } from "../redux/Loading/loading.action";

export interface CoinPrice {
  exchange: string;
  price: number;
}
export default function CoinDetails() {
  const [coinPrice, setCoinPrice] = useState<CoinPrice[] | null>(null);
  const headers = ["exchange", "price"];
  const { coinname } = useParams<{ coinname: string }>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingActions.loading());
    let data = {
      coin: coinname,
      type: coinAction.QUERY,
    };
    coinService(data).then((data) => {
      setCoinPrice(data.price);
      dispatch(loadingActions.complete());
    });
  }, []);

  return (
    <>
      <div className="h-1/2">
        <Table headers={headers} rows={coinPrice!} />
      </div>
      <div className="w-full flex justify-end mt-10">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to Home
        </span>
      </div>
    </>
  );
}
