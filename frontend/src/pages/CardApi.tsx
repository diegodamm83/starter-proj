import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const CardApi = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!todos) return <p>Loading...</p>;
  return (
    <div className="card card-dash bg-base-100 w-96">
      {todos.map((todo) => (
        <div key={todo.id} className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Task: {todo.title}</h2>
            <p>Status: {todo.completed ? "Completed" : "Not completed"}</p>
            <p>UserID: {todo.userId}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardApi;
