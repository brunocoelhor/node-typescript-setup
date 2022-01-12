import express from "express";
import { UsersController } from "@controlellers/UsersController";

const app = express();

app.get("/", (resquest, response) => {
  return response.json({message: 'hello world'})
});

app.listen(3333);