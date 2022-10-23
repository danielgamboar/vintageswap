// Conexion bbdd
import "reflect-metadata";
import { join } from "path";
import { DataSource } from "typeorm";
import { configuration } from "./config/configuration";
export const AppDataSource = new DataSource({
  type: "mysql",
  host: configuration.dbHost,
  port: configuration.dbPort,
  username: configuration.dbUsername,
  password: configuration.dbPassword,
  database: configuration.dbDatabase,
  synchronize: true,
  logging: false,
  entities: [join(__dirname, "/entity/", "*.{ts,js}")],
  migrations: [],
  subscribers: [],
  insecureAuth: true,
});
