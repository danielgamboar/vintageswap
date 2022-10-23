import { compare, genSalt, hash } from "bcryptjs";
import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { issueNewToken } from "../../helpers/auth/jwt";

export async function loginUser(request: Request, response: Response) {
  const body: Partial<User> = request.body;

  if (body.email === undefined || body.password === undefined) {
    return response.status(400).send({
      message:
        "Correo o contraseña incorrecta. Introduzca sus credenciales nuevamente.",
    });
  }

  const user = await AppDataSource.getRepository(User).findOneBy({
    email: body.email,
  });

  if (user == null) {
    return response.status(404).send("Usuario no encontrado");
  }
  const validPassword = await compare(body.password, user.password);

  if (!validPassword) {
    return response.status(400).send("Constraseña incorrecta");
  }

  const token = await issueNewToken(user);

  return response
    .status(200)
    .send({ message: "Usuario loggeado con exito", token });
}

export async function registerUser(request: Request, response: Response) {
  const body: any = request.body;

  if (
    body.fullName === undefined ||
    body.email === undefined ||
    body.password === undefined
  ) {
    return response.status(400).send("Error en la data suministrada");
  }

  let user = await AppDataSource.getRepository(User).findOneBy({
    email: body.email,
  });

  if (user != null) {
    return response.status(400).send("Ya existe un usuario con ese email");
  }

  const salt = await genSalt(10);
  const hashedPassword = await hash(body.password, salt);

  const newUser = {
    fullName: body.fullName,
    email: body.email,
    password: hashedPassword,
  };

  const userSave = await AppDataSource.manager.save(User, newUser);

  if (userSave.id === undefined) {
    return response
      .status(500)
      .send("Ha ocurrido un error en el proceso de registro");
  }

  return response.status(200).send("Usuario registrado");
}
