import { useContext } from "react"
import { notesContext } from "../../organisms/notes/noteApp"

 

function DeletenotesBtn() {
   const{setNotelist}= useContext(notesContext);
 function handleDelete() {
   setNotelist([])
 }
  return (
    <div>
        <button onClick={handleDelete}>
            Clear All Notes
        </button>
    </div>
  )
}

export default DeletenotesBtn