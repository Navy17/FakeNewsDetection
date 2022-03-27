import Link from "next/link";
import { useState } from "react";

var loginStatus = false;

function Navbar() {
  const [Data, setData] = useState("");

  const childToParent = () => {};

  return (
    <div className="header">
      <div className="header__logo">
        <h2 className="logo-f">FakeNewsDetection</h2>
      </div>

      <div className="header__menu">
        <div className="header__option">
          <Link href="/Community">
            <a>
              <span>Community</span>
            </a>
          </Link>
        </div>

        <div className="header__option">
          <Link href="/About">
            <a>
              <span>About</span>
            </a>
          </Link>
        </div>
        <div className="header__option">
          <Link href="/Signin">
            <a>
              <span>Signin</span>
            </a>
          </Link>
          &#160;&#160;|&#160;&#160;
          <Link href="/Signup">
            <a>
              <span>Signup</span>
            </a>
          </Link>
        </div>
        <div className="header__option">
          <span>
            <Link href="/Analyze">
              <a>Analyze</a>
            </Link>
          </span>
        </div>
        <div className="header__option">
          <Link href="/">
            <a>
              <span>Home</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
