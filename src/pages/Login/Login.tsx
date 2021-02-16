import Layout from "../../components/Layout/Layout";

export default function Login() {
  return (
    <>
      <Layout>
        <form className="m-auto mt-10 w-1/4 p-5 bg-gray-100 flex-box border-solid border-4 border-indigo-300">
          <div className="m-auto w-3/4">
            <label className="w-full">Username</label>
            <input className="w-full" type="text" />
          </div>
          <div className="m-auto w-3/4">
            <label className="w-full">Password</label>
            <input className="w-full" type="password" />
          </div>
          <div className="m-auto mt-2 max-w-max">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
}
