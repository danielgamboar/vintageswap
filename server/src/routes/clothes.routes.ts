import { userClothes } from "../controllers/Clothes";
import { isAuthenticated } from "../helpers/auth/authMiddleware";

export const ClothesRoutes = [
  {
    path: "/user/clothes",
    method: "get",
    action: userClothes,
    middleware: [isAuthenticated],
  },
  {
    path: "/clothes",
    method: "post",
    action: userClothes,
    middleware: [isAuthenticated],
  },
];
