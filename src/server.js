import express from "express";
import { adminRoutes } from "./routes.js";

const app = express();

app.use(express.json());

app.use(adminRoutes);

const port = 5555;

app.listen(5555, () => {
  console.log(`App Listen On Port ${port}`);
});
