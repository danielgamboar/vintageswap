import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

export async function getUser(req: Request, res: Response) {
  try {
    const id = req.user.userId;

    const user = await AppDataSource.getRepository(User).find({
      select: {
        id: true,
        fullName: true,
        email: true,
        birthday: true,
        points: true,
      },
      where: {
        id: id,
      },
    });

    if (!(user.length > 0)) {
      return res
        .status(500)
        .send({ message: "Este usuario no está registrado" });
    }

    return res.status(200).send({ message: "Usuario encontrado", user });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export async function updateUser(req: Request, res: Response) {}
