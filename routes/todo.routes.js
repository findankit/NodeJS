const express = require("express");

const todoRouter = express.Router();

//1.  Insert todo : post : /todo
//2.  Get todos : get : /todo
//3.  Get todo by id: get
// /todo/:id
// /todo?id=1
//4.  Delete todo : delete : /todo/:id
//5.  Update todo : patch : /todo/:id

// apis:: https://www.postman.com/meetmajevadiya/workspace/nodejs-learning/collection/21824627-a798183a-9145-4429-b7a9-8cfbee6bb05d?action=share&creator=21824627

let todoArray = [
  {
    todo_id: 1,
    name: "Test",
    description: "Something",
  },
  {
    todo_id: 2,
    name: "Test",
    description: "Something",
  },
  {
    todo_id: 3,
    name: "Test",
    description: "Something",
  },
];

todoRouter.post("/todo", function (req, res) {
  let todoData = req.body;
  console.log(todoData);

  todoArray.push(todoData);

  res.status(200).json({
    message: "Todo added successfully.",
    todos: todoArray,
  });
});

todoRouter.get("/todo", function (req, res) {
  res.status(200).json({
    message: "Todo fetched successfully.",
    todos: todoArray,
  });
});

todoRouter.get("/todo/:id", function (req, res) {
  let findId = req.params.id;

  let response = {};

  for (let i = 0; i < todoArray.length; i++) {
    if (todoArray[i].todo_id == findId) {
      response = todoArray[i];
    }
  }

  res.status(200).json({
    message: "Success.",
    data: response,
  });
});

todoRouter.delete("/todo/:id", function (req, res) {
  let deleteId = req.params.id;

  todoArray = todoArray.filter(function (el) {
    return el.todo_id != deleteId;
  });

  res.status(200).json({
    message: "Todo deleted successfully.",
    todos: todoArray,
  });
});

todoRouter.patch("/todo", function (req, res) {
  let newData = req.body;

  let todoIndex = todoArray.findIndex(function (todo) {
    return todo.todo_id == newData.todo_id;
  });

  todoArray[todoIndex] = newData;

  res.json({
    message: "Success.",
  });
});

module.exports = todoRouter;
