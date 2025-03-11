import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CardApi = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=30")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalPages = Math.ceil(todos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTodos = todos.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-center">
        {currentTodos.map((todo) => (
          <div key={todo.id} className="card bg-base-100 w-96 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Task: {todo.title}</h2>
              <p>Status: {todo.completed ? "Completed" : "Not completed"}</p>
              <p>UserID: {todo.userId}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <button
          className="btn btn-primary"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardApi;
