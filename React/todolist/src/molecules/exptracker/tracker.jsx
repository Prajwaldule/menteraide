import Addbtn from "../../atoms/exptracker/addbtn"
import Balance from "../../atoms/exptracker/balance"
import ExpHead from "../../atoms/exptracker/expHead"
import Expense from "../../atoms/exptracker/expense"
import Income from "../../atoms/exptracker/income"
import Reducebtn from "../../atoms/exptracker/reducebtn"


function tracker() {
  return (
    <div> 
    <ExpHead/>
    <Balance/>
    <Income/>
    <Expense/>
    <Addbtn/>
    <Reducebtn/>
    </div>
  )
}

export default tracker