import { sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function signIn(req, res) {
  const user = res.locals.user;
  const token = uuidV4();
  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
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