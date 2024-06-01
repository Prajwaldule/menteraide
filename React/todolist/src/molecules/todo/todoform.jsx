import Addbutton from "../../atoms/todo/addbutton"
import TodoTextbox from "../../atoms/todo/textbox"
import TodoHead from "../../atoms/todo/todoHead"
 

function todoform() {
   return (
    <div> 
        <TodoHead/>
        <TodoTextbox/>
        <Addbutton/>
    </div>
  )
}

export default todoform