import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export function register(req, res) {
  //Check user if exist
  const queries = "SELECT * FROM users WHERE username = ?";
  db.query(queries, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length) {
      return res.status(409).json("user already exist");
    }
    //Create user
    // hash the password
    const salt = bcrypt.getSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const queries =
      "INSERT IN TO users (`username`, `email`, `password`, `name`)";
    const values = [
      req.bod.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(queries, [values], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json("User has been created");
    });
  });
}

export function login(req, res) {
  //to do
  const queries = "SELECT * FROM users WHERE username = ?";
  db.query(queries, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("User not found!");
    }

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword) {
      return res.status(500).json("Wrong password or username");
    }
    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { passrowd, ...others } = data[0];

    res
      .cookie("accesstoken", token, { httpOnly: true })
      .status(200)
      .json(others);
  });
}

export function logout(req, res) {
  //to do
  res
    .clearCookie("accessToken", { secure: true, sameSite: "none" })
    .status(200)
    .json("user has been logged out!");
}
