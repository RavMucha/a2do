import React from "react";
import Todo from "./Todo";

const ToDoList = ({todos, setTodos, filtered}) => {
    return(
      <div className="todo-container">
          <ul className="todo-list">
            {filtered.map(todo => (
            <Todo setTodos={setTodos} todo={todo} todos={todos} text={todo.text} key={todo.id}/>
            ))}
          </ul>
      </div>
    );
};

export default ToDoList;