import {
  petitionExchange,
  petitionUpdateExchange,
} from "../controllers/Exchange";
import { isAuthenticated } from "../helpers/auth/authMiddleware";

export const ExchangeRoutes = [
  {
    path: "/exchange",
    method: "post",
    action: petitionExchange,
    middleware: [isAuthenticated],
  },
  {
    path: "/exchange",
    method: "put",
    action: petitionUpdateExchange,
    middleware: [isAuthenticated],
  },
];
