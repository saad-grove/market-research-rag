import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.listen(PORT, () => {
  console.log(`Server up and running on PORT:${PORT}`);
});
