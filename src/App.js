import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./Components/Form"
import ToDoList from "./Components/ToDoList"
import Favicon from "./favicon.png"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  //set Local Storage values as app starts - [] in useEffect is 'just on initial load'
  useEffect(() => {
    const getLocal = () => {
      if(localStorage.getItem('todos')===null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
    getLocal();
  }, []);

  //filter
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
        default:
        setFiltered(todos);
        break;
      }
    };
    filterHandler();
    const setLocal = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
    setLocal();
  }, [todos, status]);

  return (
    <div className="App">
     <header><a href="https://rafal-mucha.online/" target="_blank" rel="noopener noreferrer"><abbr title="click to contact"><img id="Logo" src={Favicon} alt="Logo" /></abbr></a>
  <h1>a2Do app</h1>
     </header>
     <Form 
     inputText={inputText} 
     todos={todos} 
     setStatus={setStatus}
     setTodos={setTodos} 
     setInputText={setInputText}/>
     <ToDoList setTodos={setTodos} filtered={filtered} todos={todos}/>
    </div>
  );
}

export default App;
