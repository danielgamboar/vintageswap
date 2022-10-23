import { Request, Response } from "express";

import { AppDataSource } from "../../data-source";
import { Clothes } from "../../entity/Clothes";
import { Exchange } from "../../entity/Exchange";
import { User } from "../../entity/User";

export async function petitionExchange(req: Request, res: Response) {
  const body = req.body;

  //   {
  //     senderId: '1',
  //     receiverId: '2',
  //     senderClotheId: '1',
  //     receiverClotheId: '2',
  //   }

  if (
    body.senderId === undefined ||
    body.receiverId === undefined ||
    body.senderClotheId === undefined ||
    body.receiverClotheId === undefined
  ) {
    return res.status(400).send("El clothId es nulo");
  }

  // Buscar ambas prendas x el id
  const clothesSender = await AppDataSource.getRepository(
    Clothes
  ).findOneByOrFail({
    id: body.senderClotheId,
  });

  const clothesReceiver = await AppDataSource.getRepository(
    Clothes
  ).findOneByOrFail({
    id: body.receiverClotheId,
  });

  // Buscar ambos users por el id
  const userSender = await AppDataSource.getRepository(User).findOneByOrFail({
    id: body.senderClothesId,
  });

  const userReceiver = await AppDataSource.getRepository(User).findOneByOrFail({
    id: body.receiverId,
  });

  const exchange = new Exchange();
  exchange.senderId = body.senderId;
  exchange.users = [userReceiver, userSender]; //Sacar bbdd
  exchange.clothes = [clothesReceiver, clothesSender];
  exchange.status = "PENDIENTE";
  await AppDataSource.manager.save(exchange);

  console.log(exchange);

  if (exchange.id == undefined) {
    return res
      .status(500)
      .send("Ha ocurrido un error en el proceso de registro");
  } else {
    return res
      .status(200)
      .send({ message: "Peticion de intercambio creada", exchange });
  }
}

export async function petitionUpdateExchange(req: Request, res: Response) {
  try {
    const body = req.body;

    const exchange = await AppDataSource.manager.findOneBy(Exchange, {
      id: body.exchangeId,
    });

    if (exchange == null) {
      throw { message: "No se encontro el usuario" };
    }
    exchange.status = body.status || exchange.status;

    AppDataSource.manager.save(exchange);
    return res
      .status(200)
      .send({ message: "Intercambio actualizado on exito", exchange });
  } catch (error) {
    return res.status(404).send({ message: "Itercambio no encontrado" });
  }
}
