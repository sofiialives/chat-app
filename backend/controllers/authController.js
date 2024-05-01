import { httpError } from "../helpers/httpError.js";
import { User } from "../db/models/userModel.js";
import generateTokenAndSetCookie from "../helpers/generateToken.js";

export const signup = async (req, res) => {
  const { email, username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword)
    throw httpError(400, "Passwords don't match");

  const user = await User.findOne({ email });

  if (user) throw httpError(400, "Username already exists");

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy/?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=${username}`;

  const newUser = new User({
    email,
    username,
    password,
    gender,
    profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
  });

  if (!newUser) throw httpError(400, "Invalid user data");

  await newUser.hashPassword();
  generateTokenAndSetCookie(newUser._id, res);
  await newUser.save();

  res
    .status(201)
    .json({ email, username, profilePicture: newUser.profilePicture });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const comparePassword = await user.comparePassword(password);
  if (!user || !comparePassword)
    throw httpError(401, "Email or password is wrong");

  generateTokenAndSetCookie(user._id, res);

  res.json({
    email,
    username: user.username,
    profilePicture: user.profilePicture,
  });
};

export const logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.json({ message: "Logged out successfully" });
};
