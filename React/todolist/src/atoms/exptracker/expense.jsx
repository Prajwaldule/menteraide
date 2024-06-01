import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 

function Expense() {
    const {expense} = useContext(expContext)
  return (
    <div>
        <h1>My Expense</h1>
        <h2>Rs {expense}</h2>
    </div>
  )
}

export default Expense