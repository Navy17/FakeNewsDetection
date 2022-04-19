import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Navbar() {
  function refreshPage() {
    window.location.reload(false);
  }

  const router = useRouter();
  const state = useSelector((state) => state.UserReducer);
  const profilePic = state.user
    ? state.user.profileUrl
      ? state.user.profileUrl
      : "img_206976.png"
    : "img_206976.png";

  return (
    <div className="header">
      <div className="header__logo">
        <h2 className="logo-f">FakeNewsDetection</h2>
      </div>

      <div className="header__menu">
        <div className="header__option">
          <Link href="/About">
            <a>
              <span>About</span>
            </a>
          </Link>
        </div>
        {!state.user ? (
          <div className="btn11" hidden="">
            <Link href="/Signin">
              <a>
                <span className="btn11">Signin</span>
              </a>
            </Link>
            &#160;&#160;|&#160;&#160;
            <Link href="/Signup">
              <a>
                <span className="btn11">Signup</span>
              </a>
            </Link>
          </div>
        ) : (
          <div className="btn11" hidden="">
            <a onClick={refreshPage}>
              <span className="btn11">Logout</span>
            </a>
          </div>
        )}
        <div className="header__option1 ">
          <span>
            <button
              className="btna"
              onClick={() =>
                state.user ? router.push("/Analyze") : alert("Please login ")
              }
            >
              <a>Analyze</a>
            </button>
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
      <div className="im">
        <img className="img" src={profilePic} />
      </div>
    </div>
  );
}

export default Navbar;
