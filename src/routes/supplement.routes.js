import { Router } from "express";

const router = Router();

router.post("/supplement", createSupplement);
router.get("/supplement", findAllSupplement);

export default router;