const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amare_Abewa12",
  database: "test",
});
app.get("/", (re, res) => {
  return res.json("From Backend side");
});
app.get("/user", (req, res) => {
  const quer = "select * from user";
  conn.query(quer, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(8081, () => {
  console.log("Listening");
});
