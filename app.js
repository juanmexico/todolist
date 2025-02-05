const express = require("express");
const bodyparser = require("body-parser");
const app = express();

// middelewars
app.use(bodyparser.urlencoded({ extended: false }));

//ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.listen(3000, () => console.log("app is runnig..."));
