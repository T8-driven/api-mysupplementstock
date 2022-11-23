import { Router } from "express";
import {
  createSupplement,
  findAllSupplement,
} from "../controllers/supplement.controllers.js";
import { supplementSchemaValidation } from "../middlewares/supplementSchemaValidation.middleware.js";

const router = Router();

router.post("/supplement", supplementSchemaValidation , createSupplement);
router.get("/supplement", findAllSupplement);

export default router;
