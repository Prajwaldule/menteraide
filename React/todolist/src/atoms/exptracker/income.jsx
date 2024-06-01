import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 

function Income() {
   const {income} = useContext(expContext)
  return (
    <div>
        <h1>My Income</h1>
        <h1>Rs {Number(income) }</h1>
    </div>
  )
}

export default Income