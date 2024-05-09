import Joi from "joi";

export const updateSchemas = Joi.object({
  username: Joi.string(),
  gender: Joi.string().valid("male", "female"),
  password: Joi.string().min(6),
  newPassword: Joi.string().min(6),
});
