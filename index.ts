import express, { Request, Response } from "express";
import { config } from "dotenv";
import showTheLogs from "./modules/showTheLogs";

config();

const app = express();
const port = process.env.LISTEN_PORT;

showTheLogs();

// app.get("/", (_req: Request, res: Response) => {
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
