import React,{useState} from 'react'

function TodoForm() {
 const[input, setInput] = useState('');
 const handleChange = e => {
     setInput(e.target.value);
 };
 const handleSubmit = e => {
     e.preventDefault();
     setInput('');
    };
  return (
      <form className='todo-form' onSubmit={handleSubmit}>
          <input 
             type='text' 
             placeholder='Add a todo' 
             value={input} 
             name='text' 
             className='todo-input'
             onChange={handleChange}
        />
          <button className='todo-button'>Add todo</button>        
      </form>
  
      
  );
}

export default TodoForm;