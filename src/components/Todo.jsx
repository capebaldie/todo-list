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
    <main className="flex flex-col bg-gray-200 m-4 p-4  rounded-lg gap-4">
      <div className=" flex items-center relative">
        <p
          className={`${
            status ? "line-through opacity-50 " : ""
          } w-[90%]  capitalize`}
        >
          {title}
        </p>
        <RiCheckboxCircleFill
          onClick={() => handleCheck(id)}
          className={`${
            status ? "text-green-400" : "text-white"
          } h-6 w-auto absolute right-0`}
        />
      </div>
      <div className=" flex gap-4 items-center justify-between">
        <button
          onClick={() => {
            deleteTask(id);
          }}
          className={`${
            status ? "w-full" : "w-52"
          } bg-red-300 border border-red-400 px-3 py-1 rounded-lg hover:bg-red-400 transition duration-200 ease-in-out`}
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
            className="bg-sky-300 border border-sky-500 px-3 w-52 py-1 rounded-lg hover:bg-sky-500 transition duration-200 ease-in-out"
          >
            Edit
          </button>
        )}
      </div>
    </main>
  );
};

export default Todo;
