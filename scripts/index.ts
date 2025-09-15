import "dotenv/config";
import { db } from "../src/db";

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
      patronus TEXT,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const result = await db.execute(`
    SELECT name FROM sqlite_master WHERE type='table' AND name='character';
  `);

  if (result.rows.length > 0) {
    console.log("✅ Tabela 'character' existe!");
  } else {
    console.log("❌ Tabela 'character' NÃO existe!");
  }
})();
