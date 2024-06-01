import { useContext } from "react"
import { notesContext } from "../../organisms/notes/noteApp"

 
function AddnoteBtn() {
    const {notelist, setNotelist} = useContext(notesContext)
    function handleAdd(){
       
            setNotelist([...notelist, "Write your note here..."])
     
      
    }
  return (
    <div>
        <button onClick={handleAdd}>
           + New Note
        </button>
    </div>
  )
}

export default AddnoteBtn