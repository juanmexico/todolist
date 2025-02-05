const fs = require("fs");
const path = require("path");

const rootDir = require("./path");
const filePath = path.join(rootDir, "data", "todo.json");

exports.getTodos = (callback) => {
  fs.readFile(filePath, (err, filecontact) => {
    if (err) return callback([]);
    callback(JSON.parse(filecontact));
  });
};

exports.saveTodos = (todos, callback) => {
  fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    callback(err);
  });
};

exports.generateRandomId = () => {
  return Math.floor(Math.random() * 1000);
};

exports.getcompletedtodo = (callback) => {
  this.getTodos((todos) => {
    callback(todos.filter((t) => t.completed === true).length);
  });
};
exports.notdonetodo = (callback) => {
  this.getTodos((todos) => {
    callback(todos.filter((t) => t.completed !== true).length);
  });
};
