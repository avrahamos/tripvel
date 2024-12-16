import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(express.json());


app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.listen(PORT, () => {
  console.log(`   server up and run visit at http://localhost:${PORT}`);
});
