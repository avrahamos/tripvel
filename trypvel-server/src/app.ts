import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import settinsRouter from './routers/settingsRoute'
import exprseRouter from './routers/expeseRouter'
import connectDB from "./config/dbConfig";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(express.json());

connectDB()

app.use("/api/settings", settinsRouter);
app.use("/api/expese", exprseRouter);

//error haneling
app.use(async(req:Request,res:Response)=>{})

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.listen(PORT, () => {
  console.log(`   server up and run visit at http://localhost:${PORT}`);
});
