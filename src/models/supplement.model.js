import joi from "joi";

export const supplementSchema = joi.object({
  name: joi.string().required().min(3),
  value: joi.number().required(),
  quantity: joi.number().required(),
  createdAt: joi.string().required(),
});
