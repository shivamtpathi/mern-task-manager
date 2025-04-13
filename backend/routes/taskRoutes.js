const express = require("express");
const {
  getTasks,
  addTask,
  deleteTask,
  completeTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);
router.post("/", addTask);
router.put("/:id", completeTask);
router.delete("/:id", deleteTask);

module.exports = router;
