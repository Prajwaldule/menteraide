import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 
function Addbtn() {
const {setShowprompt, setShowprompt2,setHist2} = useContext(expContext)
    function togglePrompt(){
        setShowprompt(true);
        setShowprompt2(false);
        setHist2(false)
    }
  return (
    <div>
        <button onClick={togglePrompt}>Add Income</button>
    </div>
  )
}

export default Addbtn