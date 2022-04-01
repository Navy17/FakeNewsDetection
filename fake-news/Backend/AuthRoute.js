const route = require("express").Router();
const User = require("./models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenVerifyMiddle = require("./middleware/verifyTokenMiddleware");

route.post("/api/auth/adduser", async (req, res) => {
  console.log("accessed!");
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const users = await user.save();
    console.log(users);
    !users && res.status(404).send("Not created");
    res.status(201).send("User has been created");
  } catch (err) {
    res.status(500).send("Not Created");
  }
});

const accessTkn = (id) => {
  return jwt.sign({ userId: id }, "CD7B7BA3-5E1C-4F5A-958B-7341A741D835", {
    expiresIn: "5m",
  });
};

route.post("/api/auth/login", async (req, res) => {
  try {
    const users = await User.findOne({ username: req.body.username });

    if (!users) {
      res.status(404).send("User Not Found");
    } else {
      const compPass = await bcrypt.compare(req.body.password, users.password);

      if (!compPass) {
        res.status(404).send("Wrong Password");
      } else {
        const token = accessTkn(users._id);

        res.status(200).json({ users, token });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

route.get("/Home", tokenVerifyMiddle, (req, res) => {
  res.status(200).json("welcome to home page");
});

module.exports = route;
