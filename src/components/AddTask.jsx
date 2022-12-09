import React from "react";
import { BiPlus } from "react-icons/bi";

const AddTask = ({ task, addTask, setTask }) => {
  return (
    <div className="flex items-center justify-center  gap-3">
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && addTask();
        }}
        className="font-medium text-lg outline-none border border-gray-300 rounded-lg px-3 py-1 my-4 h-11 w-[20rem] lg:w-[70rem]"
        type="text"
      />
      <button
        onClick={addTask}
        className="bg-green-300 px-3 py-3 border border-green-300 rounded-lg"
      >
        <BiPlus className="h-5 w-auto" />
      </button>
    </div>
  );
};

export default AddTask;
