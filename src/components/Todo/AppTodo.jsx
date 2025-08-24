import React, { useState } from "react";
import TodoItems from "./TodoItems";

function AppTodo() {
  const [inputItem, setInputItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function addItem() {
    if (!inputItem.trim()) return; // prevent empty items
    setItemList((prevItem) => [...prevItem, inputItem]);
    setInputItem("");
  }

  function deleteItem(id) {
    setItemList((prevList) => prevList.filter((_, index) => index !== id));
  }

  return (
    <>
      <header className="bg-indigo-500 shadow-md py-4 px-6 sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-white tracking-wide">To-Do</h1>
      </header>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">To-Do List</h1>
          </div>

          {/* Input + Button */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              onChange={(e) => setInputItem(e.target.value)}
              value={inputItem}
              placeholder="Enter a task..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={addItem}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Add
            </button>
          </div>

          {/* To-Do Items */}
          <ul className="space-y-3">
            {itemList.map((item, index) => (
              <TodoItems
                key={index}
                deleteItem={deleteItem}
                id={index}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AppTodo;
