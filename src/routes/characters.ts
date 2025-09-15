import { Router } from "express";
import {
  createCharacter,
  getAllCharacters,
  getCharacterById,
} from "../controllers/characterController";

const router = Router();

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);
// router.put("/:id", updateCharacter);
// router.delete("/:id", deleteCharacter);

export { router as characterRoutes };
