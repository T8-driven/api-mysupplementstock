import { sessionsCollection, usersCollection } from "../database/db.js";

import bcrypt from "bcrypt";

export async function signinBodyValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.sendStatus(401);
    }
    const passwordOk = bcrypt.compareSync(password, user.password);
    if (!passwordOk) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessionsCollection.findOne({ token });
    const user = await usersCollection.findOne({ _id: session?.userId });

    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
    //req.user = user
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  next();
}