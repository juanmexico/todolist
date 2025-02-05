const express = require("express");
const bodyparser = require("body-parser");
//database
require("./utils/database");
// end database
const { setstatics } = require("./utils/static");
const adminrouts = require("./router/admin");
const indexrouter = require("./router/index");
const errorcontrol = require("./controller/error");
const app = express();

// middelewars
app.use(bodyparser.urlencoded({ extended: false }));
//middelewars end

//ejs
app.set("view engine", "ejs");
app.set("views", "views");
//ejs end

//static
setstatics(app);
// static end
//routers
app.use("/admin", adminrouts);
app.use(indexrouter);
//routers end
// err
app.use(errorcontrol.get404);
app.listen(3000, () => console.log("app is runnig..."));
