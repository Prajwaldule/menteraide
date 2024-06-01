import { useContext } from "react"
import { todoContext } from "../../organisms/todo/todoApp"

/* eslint react/prop-types: 0 */
function Deletebutton(props) {
const {list , setList} = useContext(todoContext);
  function handleDelete() {
   // Filter out all items except the one at props.index
   const updatedList = list.filter((_,i) => i != props.index);
   // Update the list state with the updated list
   setList(updatedList);
     console.log("Updatedlist",updatedList , "props.index", props.index);
  }
  return (
    <div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Deletebutton