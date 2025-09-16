import { Request, Response } from "express";
import { db } from "../db";
import { idSchema } from "../schemas";
import { characterSchema } from "../schemas/character-schema";
import { ReturnType } from "../types";

export const getAllCharacters = async (_: Request, res: Response) => {
  try {
    const result = await db.execute("SELECT * FROM character");
    res.json(result.rows);
  } catch {
    res.status(500).json({ message: "Erro ao buscar personagens" });
  }
};

export const getCharacterById = async (req: Request, res: Response) => {
  try {
    const { id } = idSchema.parse(req.params);
    const result = await db.execute("SELECT * FROM character WHERE id = ?", [
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Personagem não encontrado" });
    res.json(result.rows[0]);
  } catch {
    res.status(500).json({ message: "Erro ao buscar personagem" });
  }
};

export const createCharacter = async (req: Request, res: Response) => {
  try {
    const {
      age,
      blood_status,
      gender,
      house,
      image_url,
      name,
      patrono,
      role,
      wand,
    } = characterSchema.parse(req.body);

    const request = await db.execute({
      sql: `INSERT INTO character 
            (name, house, age, gender, blood_status, role, wand, patrono, image_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        name,
        house,
        age,
        gender,
        blood_status,
        role,
        wand,
        patrono,
        image_url,
      ],
    });

    const response = (await request.toJSON()) as ReturnType;

    if (response.lastInsertRowid) {
      res.status(201).json({ message: "Personagem criado com sucesso!" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

/* export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = idSchema.parse(req.params);
    const character = characterSchema.partial().parse(req.body);

    const keys = Object.keys(character);
    if (keys.length === 0) {
      return res
        .status(400)
        .json({ error: "Nenhum campo fornecido para atualização" });
    }

    const setString = keys.map((key) => `${key}=?`).join(", ");
    const args = keys.map((key) => (character as any)[key]);
    args.push(id);

    const sql = `UPDATE character SET ${setString}, updated_at=CURRENT_TIMESTAMP WHERE id=?`;

    await db.execute({ sql, args });

    res.json({ message: "Personagem atualizado" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}; */

/* export const deleteCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = idSchema.parse(req.params);
    await db.execute({
      sql: "DELETE FROM character WHERE id=?",
      args: [id],
    });
    res.json({ message: "Personagem deletado" });
  } catch {
    res.status(500).json({ error: "Erro ao deletar personagem" });
  }
}; */
