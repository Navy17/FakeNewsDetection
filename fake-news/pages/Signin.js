import { useEffect, useState, useRef } from "react";
import { ApiCallCheck } from "../pages/api/ApiCall";
import { useSelector, useDispatch } from "react-redux";
import Login from "./loginWithGoogle/Login";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => {
    return state.UserReducer;
  });

  const dispatch = useDispatch();
  const initialValue = useRef(true);

  useEffect(() => {
    if (!initialValue.current) {
      console.log(state);
    } else {
      initialValue.current = false;
    }
  }, [state]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (username !== "" || password !== "") {
      await ApiCallCheck(
        {
          username: username,
          password: password,
        },
        dispatch
      );
      router.push("/Analyze");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleOnSubmit}>
        <div className="form-signin">
          <br />
          <h2> &#160; &#160;&#160; &#160;&#160;Username</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off"
          />
          <br />
          <h2>&#160; &#160;&#160; &#160;&#160;Password</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
          <br /> <br />
          <br />
          &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
          <button className="btn-1">Login</button>
        </div>
        <br />
        <div className="signin-google">
          <Login label="Sign in" />
        </div>
      </form>
    </div>
  );
}

export default Signin;
