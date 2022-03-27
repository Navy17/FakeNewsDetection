import "../styles/globals.css";
import Navbar from "../components/Navbar.js";
import "../styles/Navbar.css";
import "../styles/Signup.css";
import "../styles/Analyze.css";
import "../styles/About.css";
import "../styles/Signin.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
