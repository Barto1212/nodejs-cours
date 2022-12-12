import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import fibonacci from "./fibonacci";

const app = express();

app.use(bodyParser);

app.post("/:entryValue", (req: Request, res: Response) => {
  const { entryValue } = req.params;
  if (isNaN(Number(entryValue))) {
    res.sendStatus(500);
    return;
  }
  const returnValue = fibonacci(Number(entryValue));
  res.status(200).send(returnValue);
});

app.listen(3000, () => {
  console.log("server on");
});
