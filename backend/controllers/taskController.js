const { readTasks, writeTasks } = require("../models/taskModel");
const { v4: uuidv4 } = require("uuid");

const getTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

const addTask = (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: uuidv4(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

const completeTask = (req, res) => {
  const tasks = readTasks();
  const taskId = req.params.id;
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task
  );
  writeTasks(updatedTasks);
  res.json({ message: "Task marked as completed" });
};

const deleteTask = (req, res) => {
  const tasks = readTasks();
  const updatedTasks = tasks.filter((task) => task.id !== req.params.id);
  writeTasks(updatedTasks);
  res.json({ message: "Task deleted" });
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  completeTask,
};
