import { useContext } from "react"; 
import { todoContext } from "../../organisms/todo/todoApp";

function Completebutton() {
  const {strike, setStrike} = useContext(todoContext)
 
  function toggleStrike(){
    setStrike(!strike);
  }
  return (
    <div>
        <button  onClick={toggleStrike}>
            Done
        </button>
    </div>
  )
}

export default Completebutton