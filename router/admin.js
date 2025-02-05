const express = require("express");
const admincontroller = require("../controller/admin");
const router = express.Router();

router.post("/add-todo", admincontroller.addtodo);

router.get("/delete-todo/:id", admincontroller.deleteTodo);
router.get("/completed-todo/:id", admincontroller.completeTodo);
module.exports = router;
