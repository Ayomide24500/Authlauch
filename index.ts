import express, { Application } from "express";
import cors from "cors";
import dotEnv from "dotenv";
import { mainApp } from "./mainApp";
import { mainConnection } from "./utils/dbConfig";
dotEnv.config();

const app: Application = express();
const port: string | number = parseInt(process.env.PORT!);

app.use(express.json());
app.use(cors());

mainApp(app);
console.log(port);

app.listen(2211, () => {
  console.clear();
  mainConnection();
});
