import express from "express";

const app = express();

app.get("/", (resquest, response) => {
  return response.json({message: 'hello world'})
});

app.listen(3333);