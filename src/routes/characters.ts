import { Router } from "express";
import {
  createCharacter,
  getAllCharacters,
  getCharacterById,
} from "../controllers/characterController";
import { handleAuthApiKey } from "../middleware";

const router = Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", handleAuthApiKey, createCharacter);
// router.put("/:id", updateCharacter);
// router.delete("/:id", deleteCharacter);

export { router as characterRoutes };
