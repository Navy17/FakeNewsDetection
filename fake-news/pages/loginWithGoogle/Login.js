import GoogleLogin from "react-google-login";
import { ApiCallLoginWithGoogle } from "../api/ApiCall";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const key2 =
  "429217917988-r26744puttl2p2lu9gp4ilnjvdki0vbf.apps.googleusercontent.com";

function Login(props) {
  const router = useRouter();
  const { label } = props;
  const dispatch = useDispatch();
  const handleLogin = async (profileObj) => {
    ApiCallLoginWithGoogle(
      {
        name: profileObj.profileObj.name,
        givenName: profileObj.profileObj.givenName,
        email: profileObj.profileObj.email,
        googleId: profileObj.profileObj.googleId,
        profileUrl: profileObj.profileObj.imageUrl,
      },
      dispatch
    );
    router.push("/Analyze");
  };

  return (
    <div>
      <GoogleLogin
        clientId={key2}
        buttonText={label}
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
