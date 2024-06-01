import { useContext } from "react";
import { todoContext } from "../../organisms/todo/todoApp";

function TodoTextbox() {
    const {input, setInput} = useContext(todoContext);
  const handleChange = (e) => {
    setInput(e.target.value);
  }
 
  return (
    <div>
        <input value={input} onChange={handleChange} placeholder="Add your task" />
    </div>
  )
}

export default TodoTextbox