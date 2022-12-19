import Joi from "joi";

export const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(8).max(20).required(),
});
