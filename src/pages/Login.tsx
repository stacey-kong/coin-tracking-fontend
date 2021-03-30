import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { alertActions } from "../redux/Alert/alert.action";

import { userActions } from "../redux/User/user.action";
import { Credentials, userService } from "../service/userService";

export function Login() {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (props: Credentials) => {
    userService.login(props).then((data) => {
      if (data.code === 400) {
        dispatch(userActions.error());
        dispatch(alertActions.warning(data.message));
      } else if (data.code === 422) {
        dispatch(userActions.error());
        dispatch(alertActions.error(data.message));
      } else if (data.code === 404) {
        dispatch(userActions.error());
        dispatch(alertActions.error(data.message));
      } else if (data.code === 200) {
        localStorage.setItem("token", data.results.token);
        localStorage.setItem("id", data.results.userId);
        dispatch(userActions.success());
        dispatch(alertActions.success(data.message));
        history.push("dashboard");
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      alert("please input username");
      return;
    } else if (!password) {
      alert("please input passward");
      return;
    }
    login({ username: username, password: password });
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
          <div className="m-auto mt-4 justify-between">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
            <Link to="register">
              <button className="w-1/2 bg-blue-100 hover:bg-blue-300 text-blue-900 font-bold py-2 px-4  rounded">
                Register
              </button>
            </Link>
          </div>
        </form>
      </Layout>
    </>
  );
}
