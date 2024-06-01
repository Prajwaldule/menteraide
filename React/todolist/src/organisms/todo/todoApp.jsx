 
import React, { useState } from "react"
import Todoform from "../../molecules/todo/todoform";
import ListForm from "../../molecules/todo/listForm";

export const todoContext = React.createContext()

function TodoApp() {
   const [input, setInput] = useState('');
   const [list,setList] = useState([]);
   const[strike, setStrike] = useState(false);
  return (
    <todoContext.Provider value={{input, setInput, list, setList, strike, setStrike}}> 
        <Todoform/>
        <ListForm/>
    </todoContext.Provider>
  )
}
export default TodoApp