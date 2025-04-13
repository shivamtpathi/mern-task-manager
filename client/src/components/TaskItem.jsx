export default function TaskItem({ task, onDelete, onComplete }) {
  return (
    <div className="flex justify-between items-center p-2 bg-white rounded shadow">
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
      <div className="space-x-2">
        {!task.completed && (
          <button
            className="text-green-600"
            onClick={() => onComplete(task._id)}
          >
            ✅
          </button>
        )}
        <button className="text-red-600" onClick={() => onDelete(task._id)}>
          🗑️
        </button>
      </div>
    </div>
  );
}
