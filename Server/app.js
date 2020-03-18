const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
npm install --save express-graphqlnpm install --save express-graphql
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(3000);
