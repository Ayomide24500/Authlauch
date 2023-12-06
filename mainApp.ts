import { Application, NextFunction, Request, Response } from "express";
import { HTTP, mainError } from "./error/mainError";
import { errorHandler } from "./error/errorHandler";
import auth from "./router/userRouter";
import ejs from "ejs";
export const mainApp = (app: Application) => {
  try {
    app.use("api/v1", auth);
    app.set("view-engine", "ejs");

    app.get("/views", (req: Request, res: Response) => {
      try {
        const user = {
          name: "Habeeb",
          email: "ayomideadisa@gmail.com",
          _id: "43223dj44",
          token: 32556,
        };
        return res.status(200).render("index.ejs", { user });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    });
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Hello",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Invalid",
        });
      }
    });

    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: "Route Error",
          message: `This route ${req.originalUrl} does not exist`,
          status: HTTP.BAD,
          success: false,
        })
      );
    });

    app.use(errorHandler);
  } catch (error) {
    return error;
  }
};
