const express = require("express");
const bodyparser = require("body-parser");
const adminrouts = require("./router/admin");
const indexrouter = require("./router/index");
const errorcontrol = require("./controller/error");
const { setstatics } = require("./utils/static");
const app = express();

// middelewars
app.use(bodyparser.urlencoded({ extended: false }));

//ejs
app.set("view engine", "ejs");
app.set("views", "views");

//static
setstatics(app);

//routers
app.use("/admin", adminrouts);
app.use(indexrouter);

// err
app.use(errorcontrol.get404);

app.listen(3000, () => console.log("app is runnig..."));
