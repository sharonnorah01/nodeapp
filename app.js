const mongoose = require("mongoose");
const express = require("express");
const app = express();

const router = express.Router();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

//routes which should handle requests
app.use("/user", userRoutes);

  //port environment variable
const port = process.env.PORT || 8080;  //no need to restart the server again and again
app.listen(port, ()=> console.log(`listening on port ${port}`));
