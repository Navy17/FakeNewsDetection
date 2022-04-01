import axios from "axios";
import { startLogin, successLogin, failedLogin } from "../Actions/Actions";

export const ApiCallReg = async (userCredentials, dispatch) => {
  try {
    const user = await axios.post(
      "http://localhost:8800/api/auth/adduser",
      userCredentials
    );
    dispatch(successLogin(user.data));
    console.log(user.data);
  } catch (err) {}
};

export const ApiCallCheck = async (userCredentials, dispatch) => {
  dispatch(startLogin());
  try {
    const user = await axios.post(
      "http://localhost:8800/api/auth/login",
      userCredentials
    );
    dispatch(successLogin(user.data));
    console.log(user.data);
  } catch (err) {
    dispatch(failedLogin(err));
    console.log(err);
  }
};
