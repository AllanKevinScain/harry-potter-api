import "dotenv/config";
import express from "express";
import { characterRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use("/api/characters", characterRoutes);

app.use("/", (_, res) => {
  res.send({ message: "🚀 ~ API harry potter está em órbita!" });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
