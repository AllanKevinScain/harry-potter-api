import "dotenv/config";
import express from "express";
import { characterRoutes } from "./routes";

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send({ message: "🚀 ~ API harry potter está em órbita!" });
});

app.use((req, _, next) => {
  console.log(
    `🔁 ${req.method} ${req.originalUrl} - ${new Date().toISOString()}`
  );
  next();
});

app.use("/api/characters", characterRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
