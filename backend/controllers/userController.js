import { User } from "../db/models/userModel.js";
import { httpError } from "../helpers/httpError.js";

export const getUsersForSidebar = async (req, res) => {
  const { _id: loggedInUserId } = req.user;

  const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
    "-password"
  );

  return res.json(filterUsers);
};

export const updateUserInfo = async (req, res) => {
  const { _id } = req.user;
  const { gender, username, password, newPassword } = req.body;

  let updatedUser;

  if (password && newPassword) {
    if (password === newPassword) throw httpError(401);

    const user = await User.findById({ _id });
    if (!user) throw httpError(401);

    updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        username,
        gender,
        password: newPassword,
      },
      { new: true }
    );

    await updatedUser.hashPassword();
    await updatedUser.save();
  } else {
    updatedUser = await User.findByIdAndUpdate(
      _id,
      { username, gender },
      { new: true }
    );
    if (!updatedUser) throw httpError(404);
  }

  res.json({
    user: {
      username: updatedUser.username,
      gender: updatedUser.gender,
    },
  });
};
