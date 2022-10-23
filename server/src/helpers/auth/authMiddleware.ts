import { configuration } from "../../config/configuration";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> {
  let token = "";
  token = req.header("authorization") ?? "";
  if (token === undefined) res.status(401).send({ error: "Access denied." });

  try {
    const user = jwt.verify(token, configuration.jwtPrivateKey);
    if (user !== undefined) req.user = user;
    next();
  } catch (error) {
    console.log("error verifying jwt", error);
    return res.status(401).send({ error: "UNAUTHORIZED" });
  }
}
export async function noAuth(req, res, next): Promise<void> {
  next();
}
