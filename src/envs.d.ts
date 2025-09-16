declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    TURSO_DB_URL: string;
    TURSO_DB_AUTH_TOKEN: string;
    API_KEY: string;
  }
}
