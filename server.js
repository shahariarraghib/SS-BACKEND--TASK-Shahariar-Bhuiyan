const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(
    `SS-BACKEND--TASK database connection is successfully`.yellow.bold
  );
});

// server port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`SS-BACKEND--TASK app listening on port ${port}`.red.bold);
});
