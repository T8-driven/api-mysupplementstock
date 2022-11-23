import { userSchema } from "../models/users.model.js";

export function userShemaValidation(req, res, next) {
  const { name, email, password, type } = req.body;

  const user = {
    name,
    email,
    password,
    type: !type ? "user" : type,
  };

  const { error } = userSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.user = user;

  next();
}

export function updateUserShemaValidation(req, res, next) {
  const userLogged = res.locals.user;
  const user = req.body;

  if (userLogged.type !== "admin") {
    return res.sendStatus(401);
  }

  res.locals.newUser = user;

  next();
}
