import { useEffect, useState } from "react";
import API from "../api/axios";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const handleAdd = async (title) => {
    await API.post("/tasks", { title });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  const handleComplete = async (id) => {
    await API.put(`/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <TaskForm onAdd={handleAdd} />
      <div className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}
