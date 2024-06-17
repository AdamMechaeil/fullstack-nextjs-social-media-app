const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const verify = bcrypt.compareSync(password, user.password);
      if (verify) {
        const token = jwt.sign(
          { email, password: user.password },
          process.env.secret
        );
        res.send({ userId: user._id, token, msg: "Signin Successful" });
      } else {
        res.status(401).send("Wrong Password");
      }
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.signup = async (req, res) => {
  try {
    const {
      profilePicture,
      phoneNo,
      age,
      password,
      email,
      lastname,
      firstname,
    } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const toBeAdded = new User({
      profilePicture,
      phoneNo,
      age,
      password: hashPassword,
      email,
      lastname,
      firstname,
    });

    const user = await toBeAdded.save();
    const token = jwt.sign({ email, hashPassword }, process.env.secret);
    res.send({ userId: user._id, token, msg: "Signup Successful" });
  } catch (error) {
    console.log(error);
  }
};
