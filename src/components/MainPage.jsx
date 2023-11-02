import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Todo from "./Todo";
import UpdateTask from "./UpdateTask";
import Layout from "./Layout";

const MainPage = () => {
  //toLocaleString method returns the name of the day of the week, long indicates full length
  const day = new Date().toLocaleString("default", { weekday: "long" });

  // const list = { id: 1, title: "go for a walk", status: false };
  //storing todo list
  const [todo, setTodo] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed the JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  //storing input
  const [task, setTask] = useState("");
  //storing edited data
  const [updatedTask, setUpdatedTask] = useState("");

  useEffect(() => {
    //applying local storage
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  //if id matches the id of current select then change the status opposite so we can mark check
  const handleCheck = (id) => {
    setTodo(
      todo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  //for adding new task
  const addTask = () => {
    let num = todo.length + 1;
    task && setTodo([...todo, { id: num, title: task, status: false }]);
    setTask("");
  };

  //for deleting the task, uses filter method on todo to update arrays not having the provided id
  const deleteTask = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };

  //filter arrays without the selected item and update todo with that and updated data which we took
  const updateTask = () => {
    const old = todo.filter((task) => task.id !== updatedTask.id);
    setTodo([...old, updatedTask]);
    setUpdatedTask("");
  };

  return (
    <>
      <div className="bg-orange-500 sticky top-0 h-14 px-6 sm:px-[20rem] flex items-center justify-start">
        <p className="text-white font-medium text-base sm:text-lg">
          It's {day} What do you want to do today ?
        </p>
      </div>
      {/* if there is no update then show normal input else show editable input */}

      <Layout>
        {!updatedTask ? (
          <AddTask task={task} addTask={addTask} setTask={setTask} />
        ) : (
          <UpdateTask
            updatedTask={updatedTask}
            setUpdatedTask={setUpdatedTask}
            updateTask={updateTask}
          />
        )}
        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 gap-8">
          {todo
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((t, i) => (
              <Todo
                key={i}
                id={t.id}
                title={t.title}
                status={t.status}
                handleCheck={handleCheck}
                deleteTask={deleteTask}
                setUpdatedTask={setUpdatedTask}
              />
            ))}
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
