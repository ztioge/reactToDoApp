import React, {useState, useEffect} from "react";
import './App.css';

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

//Only once when refreshes
  useEffect(() => {
    getLocalTodos();
  }, [])
  //UseEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  //Functions
  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
      
    }
  };

  //Save to local
  function saveLocalTodos(){
    if(todos.length > 0){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }

  function getLocalTodos(){
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Ego's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus = {setStatus}
        
        />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
