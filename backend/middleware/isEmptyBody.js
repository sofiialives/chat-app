import { httpError } from "../helpers/httpError.js";

const isEmptyBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    next(httpError(400));
  }
  next();
};

export default isEmptyBody;
