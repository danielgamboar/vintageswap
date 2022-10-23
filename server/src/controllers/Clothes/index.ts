import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

export async function userClothes(req: Request, res: Response) {
  try {
    const id = req.user.userId;

    const user = await AppDataSource.getRepository(User).findOneOrFail({
      relations: {
        clothes: true,
      },
      where: {
        id,
      },
    });

    return res.status(200).send({ clothes: user.clothes });
  } catch (error) {
    return res.status(404).send({ message: "Usuario no encontrado", error });
  }
}
