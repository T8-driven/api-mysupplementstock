import { Router } from "express";
import {
  createSupplement,
  findAllSupplement,
} from "../controllers/supplement.controllers.js";

const router = Router();

router.post("/supplement", createSupplement);
router.get("/supplement", findAllSupplement);

export default router;
