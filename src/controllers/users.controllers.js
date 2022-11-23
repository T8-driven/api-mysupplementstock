import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

export async function signUp(req, res) {
  const user = res.locals.user;
  const passwordHash = bcrypt.hashSync(user.password, 10);
  try {
    await usersCollection.insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findAllUsers(req, res) {
  try {
    const users = await usersCollection.find({}).sort({ _id: -1 }).toArray();
    res.send({ users });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateUser(req, res) {
  const newUser = res.locals.newUser;
  const { id } = req.params;

  try {
    await usersCollection.updateOne({ _id: ObjectId(id) }, { $set: newUser });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
