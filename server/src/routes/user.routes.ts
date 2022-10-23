import { getUser, updateUser } from "../controllers/User";
import { isAuthenticated } from "../helpers/auth/authMiddleware";

export const UserRoutes = [
  {
    path: "/user",
    method: "get",
    action: getUser,
    middleware: [isAuthenticated],
  },
  {
    path: "/user/data",
    method: "put",
    action: updateUser,
    middleware: [isAuthenticated],
  },
];
