import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (!note.title && !note.content) return; // prevent empty notes
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div className="flex justify-center mt-6">
      <form
        onSubmit={submitNote}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md"
      >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-yellow-500 py-2 mb-3 text-lg font-medium"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-yellow-500 py-2 mb-3 resize-none text-gray-700"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
