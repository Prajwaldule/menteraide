import AddnoteBtn from "../../atoms/notes/addnoteBtn"
import DeletenotesBtn from "../../atoms/notes/deletenotesBtn"
import NoteDesc from "../../atoms/notes/noteDesc"
import NoteHead from "../../atoms/notes/noteHead"

 

function notes() {
  return (
    <div>
        <NoteHead/>
        <NoteDesc/>
        <div>
        <AddnoteBtn/>
        <DeletenotesBtn/>
        </div>
      
        
    </div>
  )
}

export default notes