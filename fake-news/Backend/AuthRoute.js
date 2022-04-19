const route = require("express").Router();
const User = require("./models/UserModel");
const loginWithGoogle = require("./models/LoginWithGoogle");
const userComment = require("./models/UserComment");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenVerifyMiddle = require("./middleware/verifyTokenMiddleware");

//New User Manual Registration

route.post("/api/auth/adduser", async (req, res) => {
  try {
    const emailCheck = await User.findOne({
      email: req.body.email,
    });

    const userNameCheck = await User.findOne({
      username: req.body.username,
    });

    if (emailCheck || userNameCheck) {
      let statusCheck = "Yes";
      res.status(200).json({ statusCheck });
    } else {
      let statusCheck = "No";
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const user = await new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        profileUrl: "",
      });

      const users = await user.save();
      !users && res.status(404).send("Not created");
      res.status(200).json({ statusCheck, users });
    }
  } catch (err) {
    res.status(500).send("500");
  }
});

//JWT Token

const accessTkn = (id) => {
  return jwt.sign({ userId: id }, "CD7B7BA3-5E1C-4F5A-958B-7341A741D835", {
    expiresIn: "10s",
  });
};

//Manual User Login

route.post("/api/auth/login", async (req, res) => {
  try {
    const users = await User.findOne({ username: req.body.username });

    if (!users) {
      res.status(404).json({ err: "User Not Found" });
    } else {
      const compPass = await bcrypt.compare(req.body.password, users.password);

      if (!compPass) {
        res.status(404).send("Wrong Password");
      } else {
        const token = accessTkn(users._id);
        console.log(users);
        res.status(200).json({ users, token });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//LoginWithGoogle

route.post("/api/auth/loginWithGoogle", async (req, res) => {
  try {
    const users = await loginWithGoogle.findOne({
      googleId: req.body.googleId,
    });
    if (!users) {
      try {
        const user = await new loginWithGoogle({
          name: req.body.name,
          givenName: req.body.givenName,
          email: req.body.email,
          googleId: req.body.googleId,
          profileUrl: req.body.profileUrl,
        });
        const users = await user.save();
        console.log(users);
        !users && res.status(404).send("Not created");
        res.status(201).send("User has been created");
      } catch (err) {
        res.status(500).send("Not Created");
      }
    } else {
      if (!users.profileUrl == req.body.profileUrl) {
      }
      console.log(users);
      res.status(201).send(users);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Token JWT

route.get("/Home", tokenVerifyMiddle, (req, res) => {
  res.status(200).json("welcome to home page");
});

//User Comments

route.post("/api/auth/comment", async (req, res) => {
  console.log("accessed!");
  try {
    console.log("Im here1");
    const userComments = await new userComment({
      Comment: req.body.Comment,
      username: req.body.username,
      profileUrl: req.body.profileUrl,
      timestamp: req.body.timestamp,
    });
    console.log("Im here2");
    try {
      const userCommentss = await userComments.save();
      console.log(userCommentss);
    } catch (err) {
      console.log(err);
    }
    console.log("Im here3");
    console.log(userComments);
    !userComments && res.status(404).send("Not created");
    res.status(201).send("UserComment has been created");
  } catch (err) {
    console.log("Im here");
    console.log(err);
    res.status(500).send("Not Created");
  }
});

//Comments Fetch

route.get("/api/auth/comments", (req, res) => {
  userComment
    .find()
    .then((result) => {
      console.log("result: ", result);
      res.send(result.length > 0 ? result : "No Todos");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = route;
