export const startLogin = () => {
  return {
    type: "START_LOGIN",
  };
};

export const successLogin = (user) => {
  return {
    type: "SUCCESS_LOGIN",
    payload: user,
  };
};

export const failedLogin = (error) => {
  return {
    type: "FAILED_LOGIN",
    payload: error,
  };
};
