const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const userRoute = require("./Routes/userLogInfo.route");

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("SS-BACKEND--TASK surver is connected!!");
});

module.exports = app;
