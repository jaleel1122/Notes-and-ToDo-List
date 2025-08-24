import React, { useState } from "react";

function TodoItems({ item, id, deleteItem }) {
  const [isDone, setIsDone] = useState(false);

  function toggleCheck() {
    setIsDone((prevDone) => !prevDone);
  }

  return (
    <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
      {/* Task text */}
      <span
        onClick={toggleCheck}
        className={`cursor-pointer select-none ${
          isDone ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {item}
      </span>

      {/* Delete button */}
      <button
        onClick={() => deleteItem(id)}
        className="text-red-500 hover:text-red-600 text-lg transition"
        title="Delete item"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItems;
