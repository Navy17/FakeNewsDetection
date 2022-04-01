const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  console.log("hi");
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json("A token is required for authentication");
  }

  try {
    const decode = jwt.verify(token, "CD7B7BA3-5E1C-4F5A-958B-7341A741D835");
    req.user = decode;
  } catch (err) {
    return res.status(401).json(err);
  }

  return next();
};

module.exports = verifyToken;
