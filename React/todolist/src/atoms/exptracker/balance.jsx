import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 

function Balance() {
    const {balance} =  useContext(expContext)
  return (
    <div>
        <h1>My Balance</h1>
        <h1>{balance}</h1>
    </div>
  )
}

export default Balance