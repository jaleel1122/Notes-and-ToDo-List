import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function AppKeeper() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 to-orange-200">
      {/* Header */}
      <Header />

      {/* Create Area */}
      <main className="flex-1 px-4 sm:px-8 lg:px-16 py-6">
        <CreateArea onAdd={addNote} />

        {/* Notes Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default AppKeeper;
