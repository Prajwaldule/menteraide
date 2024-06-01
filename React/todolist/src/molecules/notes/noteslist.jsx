import { useContext } from "react"
import NotelistHead from "../../atoms/notes/notelistHead"
import { notesContext } from "../../organisms/notes/noteApp"

function Noteslist() {
  const {notelist} = useContext(notesContext)
 
  return (
    <div>
      
       <NotelistHead/>
     

       {notelist.map(( item , index ) => (
         <div key={index}>
            <input type="textarea" placeholder={item}/>
         </div>   
       )) }
     
    </div>

  )
}

export default Noteslist