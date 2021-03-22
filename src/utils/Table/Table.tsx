interface TableProps {
  headers: string[];
  rows: Object[];
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

const renderList = function (data: (string | boolean)[]): any {
  const renderProps = data.map((data) => {
    return (
      <td className="px-6 py-4 whitespace-nowrap">
        {typeof data == "boolean" ? (
          data ? (
            yesButton
          ) : (
            noButton
          )
        ) : (
          <div className="text-sm text-gray-900">{data}</div>
        )}
      </td>
    );
  });
  return renderProps;
};

export default function table(props: TableProps) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {props.headers.map((header, index) => {
                    return (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        key={index}
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.rows.map((row) => {
                  return (
                    <tr>
                      {renderList(Object.values(row))}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
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
        </div>
      </div>
    </div>
  );
}
