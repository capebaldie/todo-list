import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Todo = ({
  title,
  status,
  id,
  handleCheck,
  deleteTask,
  setUpdatedTask,
}) => {
  return (
    <main className="flex flex-col justify-between bg-gray-100 shadow p-4 rounded-md gap-4">
      <div className=" flex items-center h-full relative">
        <p
          className={`${
            status ? "line-through opacity-50 " : ""
          } w-[92%]  capitalize`}
        >
          {title}
        </p>
        <RiCheckboxCircleFill
          onClick={() => handleCheck(id)}
          className={`${
            status ? "text-green-400" : "text-gray-300 hover:text-gray-400"
          } h-6 w-auto absolute right-0 cursor-pointer `}
        />
      </div>
      <div className=" flex gap-4 pt-1 items-center justify-between">
        <button
          onClick={() => {
            deleteTask(id);
          }}
          className={`${
            status ? "w-full" : "w-52"
          } bg-red-400 border border-red-400 px-3 py-1 rounded-md hover:bg-red-500 transition duration-200 ease-in-out`}
        >
          Delete
        </button>
        {!status && (
          <button
            onClick={() => {
              setUpdatedTask({
                id: id,
                title: title,
                status: status,
              });
            }}
            className="bg-sky-400 border border-sky-400 px-3 w-52 py-1 rounded-md hover:bg-sky-500 transition duration-200 ease-in-out"
          >
            Edit
          </button>
        )}
      </div>
    </main>
  );
};

export default Todo;
