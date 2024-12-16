import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import settinsRouter from './routers/settingsRoute'
import exprseRouter from './routers/expeseRouter'

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(express.json());

app.use("/api/settings", settinsRouter);
app.use("/api/expese", exprseRouter);


app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.listen(PORT, () => {
  console.log(`   server up and run visit at http://localhost:${PORT}`);
});
