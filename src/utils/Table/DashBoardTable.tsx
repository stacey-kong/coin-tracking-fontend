import { CoinPriceList } from "../../pages/Dashboard";
import { Link } from "react-router-dom";
interface TableProps {
  headers: string[];
  rows: CoinPriceList[];
  delete: (coin: string) => void;
}

const yesButton = (
  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
    Yes
  </span>
);
const noButton = (
  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
    no
  </span>
);

const renderList = function (data: CoinPriceList): any {
  return (
    <>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link to={`coin/${data.abbreviation}`}>
          <div className="text-sm text-gray-900">{data.name}</div>
        </Link>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{data.price}</div>
      </td>
    </>
  );
};

export default function table(props: TableProps) {
  return (
    <div className="h-full shadow overflow-scroll border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {props.headers?.map((header, index) => {
              return (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium bg-gray-50 text-gray-500 uppercase tracking-wider sticky top-0"
                  key={index}
                >
                  {header}
                </th>
              );
            })}
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium bg-gray-50 text-gray-500 uppercase tracking-wider sticky top-0"
              key={"deleteButton"}
            ></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.rows?.map((row, index) => {
            return (
              <tr key={index}>
                {renderList(row)}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => props.delete(row.abbreviation)}
                  >
                    delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
