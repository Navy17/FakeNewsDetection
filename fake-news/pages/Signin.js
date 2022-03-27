import React, { Component } from "react";

export class Signin extends Component {
  render() {
    return (
      <div className="signin-container">
        <form>
          <div className="form-signin">
            {" "}
            <h2> &#160; &#160;&#160; &#160;&#160;Username</h2>
            <input type="text" placeholder="Username" />
            <br />
            <br />
            <h2>&#160; &#160;&#160; &#160;&#160;Password</h2>
            <input type="text" placeholder="Password" />
            <br /> <br />
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
            <button className="btn-1">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
