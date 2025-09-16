import "dotenv/config";
import { db } from "../db";

(async () => {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS character (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      house TEXT,
      age INTEGER,
      gender TEXT,
      blood_status TEXT,
      role TEXT,
      wand TEXT,
      image_url TEXT,
      patrono TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Comando para aapagar um campo
  // await db.execute(`
  //   ALTER TABLE character
  //   DROP COLUMN patronus
  // `);

  // Comando para adicionar uma linha caso ela ainda nao exista
  // const result = await db.execute(`PRAGMA table_info(character);`);
  // const columns = result.rows.map((row) => row.name);
  // if (!columns.includes("patrono")) {
  //   await db.execute(`ALTER TABLE character ADD COLUMN patrono TEXT`);
  // }

  // Comando para alterar os valores de campo caso os campos existam
  // const result = await db.execute(`PRAGMA table_info(character);`);
  // const columns = result.rows.map((row) => row.name);
  // if (columns.includes("patronus") && columns.includes("patrono")) {
  //   await db.execute(`
  //     UPDATE character SET patrono = patronus WHERE patronus IS NOT NULL;
  //   `);
  // }

  console.log("🏁 Migrações executadas!");
})();
