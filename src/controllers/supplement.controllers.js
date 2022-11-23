import { supplementCollection } from "../database/db.js";

export async function createSupplement(req, res) {
  const supplement = res.locals.supplement;

  try {
    await supplementCollection.insertOne(supplement);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findAllSupplement(req, res) {
  try {
    const supplements = await supplementCollection
      .find({})
      .sort({ _id: -1 })
      .toArray();

    res.send({ supplements });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
