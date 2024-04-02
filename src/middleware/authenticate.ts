import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface User {
  userId: number;
  username: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.sendStatus(401); // Unauthorized if token is not provided

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: jwt.VerifyErrors | null, user: any) => {
      if (err) return res.sendStatus(403); // Forbidden if token is invalid
      req.user = user as User; // Attach the user object to the request for further use
      next(); // Pass the request to the next middleware or route handler
    }
  );
}

export default authenticateToken;
