import { useContext } from "react"
import { todoContext } from "../../organisms/todo/todoApp";
 

 

function Addbutton() {
  const { list, setList, input, setInput} = useContext(todoContext)
  function addItem(){
    if(list.length >= 0){
      setList([...list, input]);
      setInput("")
    } 
  }
  return (
    <div> 
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default Addbutton