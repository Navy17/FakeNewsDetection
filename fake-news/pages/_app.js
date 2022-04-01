import "../styles/globals.css";
import Navbar from "../components/Navbar.js";
import "../styles/Navbar.css";
import "../styles/Signup.css";
import "../styles/Analyze.css";
import "../styles/About.css";
import "../styles/Signin.css";
import "../styles/Community.css";
import "../public/img_206976.png";
import store from "./store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
