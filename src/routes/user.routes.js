import { Router } from "express";
import {
  findAllUsers,
  signUp,
  updateUser,
} from "../controllers/users.controllers.js";
import {
  userShemaValidation,
  updateUserShemaValidation,
} from "../middlewares/userSchemaValidation.middleware.js";
import { authRoutesValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/sign-up", userShemaValidation, signUp);

router.use(authRoutesValidation);
router.get("/users", findAllUsers);
router.put("/users/:id", updateUserShemaValidation, updateUser);

export default router;
