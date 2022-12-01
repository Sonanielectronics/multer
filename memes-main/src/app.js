const express = require("express");
const cors = require("cors");
const app = express();
require("./db/conn");
const router = require("../src/router/router");

var path = require("path");
var ejs = require("ejs");
var ejs_folder_path = path.join(__dirname, "../templates");
app.set("view engine", "ejs");
app.set("views", ejs_folder_path);

app.use(express.json());
app.use(cors({origin:true, credentials: true}));
app.use("/", router);

// server port define
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});