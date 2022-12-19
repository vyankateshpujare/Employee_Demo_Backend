import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
});
