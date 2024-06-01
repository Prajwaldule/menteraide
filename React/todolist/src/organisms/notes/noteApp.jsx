import React, { useState } from "react"
import Notes from "../../molecules/notes/notes";
import Noteslist from "../../molecules/notes/noteslist";

export const notesContext = React.createContext();

function NoteApp() {
    const [notelist , setNotelist] = useState([]);
  return (
    <notesContext.Provider value={{notelist, setNotelist}}>
        <Notes/>
        <Noteslist/>
    </notesContext.Provider>
  )
}

export default NoteApp