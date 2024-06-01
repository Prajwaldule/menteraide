import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 

function Reducebtn() {
   const {setShowprompt2, setShowprompt, setHist} = useContext(expContext)
   function handleClick(){
    setShowprompt2(true);
    setShowprompt(false)
    setHist(false)
   }
  return (
    <div>
        <button onClick={handleClick}>Add Expense</button>
    </div>
  )
}

export default Reducebtn