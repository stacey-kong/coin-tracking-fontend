import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Layout} from "../components/Layout/Layout";

// redux
import { useDispatch } from "react-redux";
import { alertActions } from "../redux/Alert/alert.action";

// service
import { userService } from "../service/userService";

export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      alert("please input username");
      return;
    } else if (!password) {
      alert("please input passward");
      return;
    }

    const res = await userService.register({
      username: username,
      password: password,
    });

    if (res.error) {
      dispatch(alertActions.error(res.errors["msg"]));
    } else {
      dispatch(alertActions.success(res.message));
      history.push("login");
    }
  };
  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit}
          className="m-auto mt-10 w-5/6 md:w-1/3 lg:w-1/4 p-5 bg-gray-100 flex-box border-solid border-4 border-indigo-300"
        >
          <div className="m-auto w-3/4">
            <label className="w-full">Username</label>
            <input
              className="w-full"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="m-auto w-3/4">
            <label className="w-full">Password</label>
            <input
              className="w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="m-auto mt-2 max-w-max">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
}
