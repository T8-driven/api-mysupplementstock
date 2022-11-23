import { supplementSchema } from "../models/supplement.model.js";

export function supplementSchemaValidation(req, res, next) {
  const { name, value, quantity } = req.body;

  const supplement = {
    name,
    value,
    quantity,
    createdAt: dayjs().format("DD/MM/YYYY"),
  };

  const { error } = supplementSchema.validate(supplement, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.supplement = supplement;

  next();
}
