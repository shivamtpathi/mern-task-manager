const Task = require("../models/taskModel");

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch tasks from MongoDB
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err });
  }
};

// Add a new task
const addTask = async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      completed: false,
    });

    const savedTask = await newTask.save(); // Save new task to MongoDB
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: "Error adding task", error: err });
  }
};

// Mark a task as completed
const completeTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndUpdate(
      taskId,
      { completed: true },
      { new: true } // Returns the updated task
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task marked as completed", task });
  } catch (err) {
    res.status(500).json({ message: "Error completing task", error: err });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted", task: deletedTask });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task", error: err });
  }
};

module.exports = {
  getTasks,
  addTask,
  completeTask,
  deleteTask,
};
