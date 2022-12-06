const express = require("express");
const app = express();
const cors = require("cors");

app.get("/", (req, res) => {
  res.json({ message: "hello from the server" });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
