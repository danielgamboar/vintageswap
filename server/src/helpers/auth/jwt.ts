import jwt from "jsonwebtoken";
import { configuration } from "../../config/configuration";

import { User } from "../../entity/User";

export async function issueNewToken(user: User): Promise<string> {
  return jwt.sign(
    { userId: user.id, email: user.email },
    configuration.jwtPrivateKey,
    { expiresIn: `${configuration.expiry}m` }
  );
}
