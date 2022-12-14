import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import supplementRoutes from "./routes/supplement.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(supplementRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));
