import express from "express";
const app = express();
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//midleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("API working");
});

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Amare_Abewa12",
//   database: "test",
// });
// app.get("/", (re, res) => {
//   return res.json("From Backend side");
// });
// app.get("/user", (req, res) => {
//   const quer = "select * from user";
//   conn.query(quer, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
