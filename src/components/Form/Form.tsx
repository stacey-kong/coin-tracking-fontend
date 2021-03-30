import { CoinList } from "../../pages/Dashboard";
import Selection from "../SelectMenus/SelectMenus";
interface FormProps {
  show: boolean;
  onSave: () => void;
  selection?: CoinList[];
}

export default function Form(props: FormProps) {
  const showHideClassName = props.show ? "flex" : "hidden";
  return (
    <form
      // action="#"
      // method="POST"
      onSubmit={(event: React.FormEvent) => {
        event?.preventDefault();
      }}
      className={`${showHideClassName} z-10 w-full h-full fixed top-0 left-0`}
    >
      <div className="shadow overflow-visible sm:rounded-md relative w-1/3 h-1/2 m-auto">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-1 gap-1">
            {props.selection ? <Selection element={props.selection} /> : ""}

            <div className="col-span-6 sm:col-span-3 lg:col-span-2 py-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Currency
              </label>
              <input
                type="text"
                name="Currency"
                id="Currency"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            // type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={props.onSave}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
