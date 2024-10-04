// 

import { useState,useRef } from "react";




function App() {

     const input =useRef()
    const [todo,setTodo]= useState([])
  
     const addTodo = (event) => {
       event.preventDefault()
       console.log(input.current.value);
       todo.push( input.current.value);
       setTodo([...todo])
       console.log(todo);
       input.current.value = ""
     }
  
     const deleteTodo = (index)=>{
      // console.log('todo deleted' , index);
       todo.splice(index , 1);
       setTodo([...todo]);
  
     }
     const editTodo = (index)=>{
      const edit = prompt("Please enter your todo")
      todo.splice(index,1,edit)
      setTodo([...todo])
     }
    
  
     return (
       <>
         <h1>Todo App</h1>
         <form onSubmit={addTodo}>
           <input type="text" placeholder="enter todo" ref={input} />
           <button type="submit">Add Todo</button>
         </form>
         <ol>
           {todo.length > 0 ? todo.map((item , index) => {
             return <li key={index}>{item}
             <button onClick={()=> deleteTodo(index)}>Delete</button>
             <button onClick={()=> editTodo(index)}>Edit</button>
             </li>
           }) : <h1>No item found...</h1>}
         </ol>
       </>
     )
   }
  
  export default App
  
  
  
  
  
  
  
  
  
  
  
  // use state kehta haa rendering wala saara mamla ma khud dekhonga..
  // react ka undar map use krta waqt jo item render kr rha ho uska undar unique key prop dena ha
  
  
  
  
  
  
  
  
  
  