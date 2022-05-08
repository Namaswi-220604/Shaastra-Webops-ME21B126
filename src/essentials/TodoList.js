import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
  const [todos,setTodos] = useState ([]);

  const addTodo = todo => {
    const newTodos=[todo, ...todos]

    setTodos(newTodos);
  };

  const completeTodo = id =>{
    let updatedTodos = todos.map(todo =>{
      if (todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
    
  return (
     <div>
         <h1>What's the plan today</h1>
         <TodoForm onSubmit={addTodo} />
         <Todo todos={todos} completeTodo={completeTodo}/>
     </div>
  );
}

export default TodoList;