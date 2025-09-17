import cors from "cors";
import express, { Router } from "express";

import {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
} from "../controllers/characterController";
import { handleAuthApiKey } from "../middleware";

const router = Router();

router.use(cors({ origin: "*" }));
router.use(express.json());

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", handleAuthApiKey, createCharacter);
router.put("/:id", handleAuthApiKey, updateCharacter);
// router.delete("/:id", deleteCharacter);

export { router as characterRoutes };
