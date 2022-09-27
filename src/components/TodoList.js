import React from "react";

//Import components
import Todo from "./Todo";

function TodoList({todos, setTodos, filteredTodos}){
    return(
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text}/>
            ))}
            </ul>
        </div>
    );
}

export default TodoList;