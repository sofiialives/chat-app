import { User } from "../db/models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
  const { _id: loggedInUserId } = req.user;

  const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
    "-password"
  );

  return res.json(filterUsers);
};
