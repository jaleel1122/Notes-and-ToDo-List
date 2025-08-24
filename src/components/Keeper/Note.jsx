import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 relative hover:shadow-lg transition">
      <h1 className="text-lg font-semibold text-gray-800">{props.title}</h1>
      <p className="mt-2 text-gray-600">{props.content}</p>
      <button
        onClick={handleClick}
        className="absolute bottom-2 right-2 text-xs bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
