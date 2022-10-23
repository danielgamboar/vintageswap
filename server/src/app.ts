console.log("prueba");
import "reflect-metadata";
// import cors from 'cors'
import express, { Request, Application, NextFunction, Response } from "express";
import { AppRoutes } from "./routes/index";
import { AppDataSource } from "./data-source";
import bodyParser from "body-parser";
import { configuration } from "./config/configuration";

AppDataSource.initialize()
  .then(async () => {
    const app: Application = express();

    // app.use(cors());
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(loggerMiddleware)

    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        [...route.middleware],
        (request: Request, response: Response, next: NextFunction) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        }
      );
    });

    const PORT = configuration.serverPort;
    app.listen(PORT, () => {
      console.log("Serving on port", PORT);
    });
  })
  .catch((error) => console.log(error));
