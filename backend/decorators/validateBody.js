import { httpError } from "../helpers/httpError";

export const validateBody = (schema) => {
  const fn = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(httpError(400));
    }
  };
  return fn;
};
