import { AuthRoutes } from "./auth.routes";
import { ClothesRoutes } from "./clothes.routes";
import { ExchangeRoutes } from "./exchange.routes";
import { UserRoutes } from "./user.routes";

export const AppRoutes = [
  ...AuthRoutes,
  ...UserRoutes,
  ...ClothesRoutes,
  ...ExchangeRoutes,
];
