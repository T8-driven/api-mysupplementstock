import { Router } from "express";
import { signIn } from "../controllers/auth.controllers.js";
import { signinBodyValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/sign-in", signinBodyValidation, signIn);

export default router;
