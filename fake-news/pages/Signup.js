import { useState } from "react";
import { ApiCallReg } from "../pages/api/ApiCall";
import Login from "./loginWithGoogle/Login";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    ApiCallReg(
      {
        name: name,
        username: username,
        email: email,
        password: password,
      },
      dispatch
    );
    if (state.user) {
      console.log(state.user.statusCheck);
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="form__container">
          <form action="" onSubmit={handleOnSubmit}>
            <h5>Name</h5>
            <input
              className="input__"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
            />
            <br />
            <br />
            <h5>UserName</h5>
            <input
              className="input__"
              type="text"
              placeholder="Create Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="off"
            />
            <br />
            <br />
            <h5>Email</h5>
            <input
              className="input__"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
            <br />
            <br />
            <h5>Password</h5>
            <input
              className="input__"
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
            <br />
            <br />
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            <button type="submit" className="button-1">
              Signup
            </button>
          </form>
        </div>
        <h2>&#160;&#160;OR&#160;&#160;</h2>
        <div className="form__container1">
          <Login label="Signup with Google" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
