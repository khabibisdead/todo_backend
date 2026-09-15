import express from "express";
import {createTodo,getTodos} from "../controller/todo.controller.js";

const router = express.Router();


router.get("/", (req, res) => {
  res.send("todo api is running");
})


//creat todo

router.post("/add", createTodo);


//get all todos
router.get("/get", getTodos);

export default router;
