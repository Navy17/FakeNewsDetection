import GoogleLogin from "react-google-login";
import { fetchBasicProfile } from "react-google-login";

const key2 =
  "429217917988-r26744puttl2p2lu9gp4ilnjvdki0vbf.apps.googleusercontent.com";

import { useState } from "react";

function Signup() {
  const handleLogin = (profileObj) => {
    console.log(profileObj);
  };

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, username, email, password } = user;

    const res = await fetch(
      "https://mypro-c1642-default-rtdb.firebaseio.com/registrationForm.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      }
    );
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="form__container">
          <form onSubmit={postData} method="POST">
            <h5>Name</h5>
            <input
              className="input__"
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={getUserData}
              required
              autoComplete="off"
            />
            <br />
            <br />
            <h5>UserName</h5>
            <input
              className="input__"
              type="text"
              name="username"
              placeholder="Create Username"
              value={user.username}
              onChange={getUserData}
              required
              autoComplete="off"
            />
            <br />
            <br />
            <h5>Email</h5>
            <input
              className="input__"
              type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={getUserData}
              required
              autoComplete="off"
            />
            <br />
            <br />
            <h5>Password</h5>
            <input
              className="input__"
              type="password"
              name="password"
              placeholder="Create Password"
              value={user.password}
              onChange={getUserData}
              required
              autoComplete="off"
            />
            <br />
            <br />
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            <button type="submit" className="button-1">
              Submit
            </button>
          </form>
        </div>
        <h2>&#160;&#160;OR&#160;&#160;</h2>
        <div className="form__container1">
          <GoogleLogin
            clientId={key2}
            buttonText="Login with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
}

export default Signup;
