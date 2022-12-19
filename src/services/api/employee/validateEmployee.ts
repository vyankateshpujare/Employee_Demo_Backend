import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  deptId: Joi.string().required(),
  salary: Joi.number().required(),
  age: Joi.number(),
});
