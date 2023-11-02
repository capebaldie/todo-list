import React from "react";

const UpdateTask = ({ updatedTask, setUpdatedTask, updateTask }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <input
        value={updatedTask && updatedTask.title}
        onChange={(e) => {
          setUpdatedTask({ ...updatedTask, title: e.target.value });
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && updateTask();
        }}
        className="font-medium shadow-sm text-base outline-none border border-gray-300 rounded-lg px-3 py-1 my-4 h-11 w-[18rem] lg:w-[68rem]"
        type="text"
      />
      <button
        onClick={updateTask}
        className="bg-green-300 px-3 py-2 border border-green-300 rounded-lg"
      >
        update
      </button>
    </div>
  );
};

export default UpdateTask;
