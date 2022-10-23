import { loginUser, registerUser } from "../controllers/Auth";
import { noAuth } from "../helpers/auth/authMiddleware";

export const AuthRoutes = [
  {
    path: "/user/registerUser",
    method: "post",
    action: registerUser,
    middleware: [noAuth],
  },

  {
    path: "/user/login",
    method: "post",
    action: loginUser,
    middleware: [noAuth],
  },
];
