import React from "react";

function showAlert() {
  document.getElementById("snackbar").className = "show";
  setTimeout(() => {document.getElementById("snackbar").classList.remove("show")}, 2000);
}

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText !== '' && inputText !== ' ') {
    setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
    setInputText("");
    } else {
      showAlert();
    }
  };
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
    return(
        <form>
          <div className="adder">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
      <abbr title="add">
        <b>+</b>
        </abbr>
      </button>
      </div>
      <div className="select">
      <abbr title="filter">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        </abbr>
      </div>
    </form>
    );
};

export default Form;