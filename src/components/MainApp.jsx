import React, { useState } from "react";
import AppKeeper from "./Keeper/AppKeeper";
import AppTodo from "./Todo/AppTodo";

function MainApp() {
  const [activeTab, setActiveTab] = useState("keeper"); // default tab

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-indigo-200 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📒 Notes + ✅ To-Do
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeTab === "keeper"
              ? "bg-yellow-400 text-gray-800 shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("keeper")}
        >
          Notes
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeTab === "todo"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("todo")}
        >
          To-Do List
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className={activeTab === "keeper" ? "block" : "hidden"}>
          <AppKeeper />
        </div>
        <div className={activeTab === "todo" ? "block" : "hidden"}>
          <AppTodo />
        </div>
      </div>
    </div>
  );
}

export default MainApp;
