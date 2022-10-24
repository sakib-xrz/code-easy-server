const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Code Easy Server Is Running!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
