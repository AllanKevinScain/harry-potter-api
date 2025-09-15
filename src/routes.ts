import { Router } from "express";
import {db} from "./db";

const router = Router();

router.get("/users", (req, res) => {
  const users = db.prepare("SELECT * FROM users").all();
  res.json(users);
});

router.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    const info = stmt.run(name, email);
    res.status(201).json({ id: info.lastInsertRowid, name, email });
  } catch (err) {
    res.status(500).json({ error: "Email já existe ou erro no banco." });
  }
});

export {router as AllRoutes};
