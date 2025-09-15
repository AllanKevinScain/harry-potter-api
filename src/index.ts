import express from "express";
import { AllRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use("/api", AllRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
