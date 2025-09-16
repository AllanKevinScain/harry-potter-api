import { NextFunction, Request, Response } from "express";
import { HeadersHandleAuthApiKeyInterface } from "../types";

export function handleAuthApiKey(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const headers: HeadersHandleAuthApiKeyInterface = req.headers;

  if (headers.api_key && headers.api_key === process.env.API_KEY) {
    next();
  } else {
    res.status(400).json({ message: "A chave de acesso não foi reconhecida" });
  }
}
