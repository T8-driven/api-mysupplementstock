import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("mySupplementStock");
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const supplementCollection = db.collection("supplements");
