import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string()
    .required()
    .min(4)
    .max(12)
    .messages({ "any.required": "missing required username field" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  gender: Joi.string()
    .valid("male", "female")
    .required()
    .messages({ "any.required": "missing required gender field" }),
  password: Joi.string()
    .required()
    .min(6)
    .messages({ "any.required": "missing required password field" }),
  confirmPassword: Joi.string()
    .required()
    .min(6)
    .messages({ "any.required": "missing required password field" }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  password: Joi.string()
    .required()
    .min(6)
    .messages({ "any.required": "missing required password field" }),
});

export const schemas = { registerSchema, loginSchema };
