import { config } from "dotenv";
config();

let configuration = {
  dbHost: String(process.env.DB_HOST),
  dbPort: Number(process.env.DB_PORT),
  dbUsername: String(process.env.DB_USER),
  dbPassword: String(process.env.DB_PASSWORD),
  dbDatabase: String(process.env.DB_NAME),
  serverPort: String(process.env.PORT),
  jwtPrivateKey: String(process.env.JWT_SECRET),
  expiry: Number(process.env.EXPIRY_TIME),
};

console.log("configuration", JSON.stringify(configuration));

export { configuration };
