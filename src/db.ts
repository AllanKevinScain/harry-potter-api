import type { Database as DatabaseType } from "better-sqlite3";
import Database from "better-sqlite3";

export const db = new Database("database.db") as DatabaseType;

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )
`
).run();
