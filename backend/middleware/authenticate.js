import jwt from "jsonwebtoken";
import { httpError } from "../helpers/httpError.js";
import { User } from "../db/models/userModel.js";

const authenticate = async (req, res, next) => {
  const token = req.cookie.jwt;
  if (!token) throw httpError(401);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) throw httpError(401);

    const user = await User.findById(decoded.userId);
    if (!user || !user.token || user.token !== token) next(httpError(401));

    req.user = user;
    next();
  } catch (error) {
    next(httpError(401));
  }
};

export default authenticate;
