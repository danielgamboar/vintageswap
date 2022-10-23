import { Request, response, Response } from "express";
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

export async function updateUser(req: Request, res: Response) {
  try {
    const id = req.user.userId;
    const body = req.body;

    const user = await AppDataSource.manager.findOneBy(User, {
      id: id,
    });

    console.log(user);

    if (user == null) {
      throw { message: "No se encontro el usuario" };
    }

    user.fullName = body.fullName ?? user.fullName;
    user.birthday = body.birthday ?? user.birthday;
    user.adress = body.adress ?? user.adress;
    user.height = body.height ?? user.height;
    user.chest = body.chest ?? user.chest;
    user.leg = body.leg ?? user.leg;
    user.hip = body.hip ?? user.hip;
    user.size = body.size ?? user.size;
    user.quote = body.quote ?? user.quote;

    await AppDataSource.manager.save(user);

    return res
      .status(200)
      .send({ message: "Usuario actualizado on exito", user });
  } catch (error) {
    return res.status(404).send({ message: "Usuario no encontrado" });
  }
}
