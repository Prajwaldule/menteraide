import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 
function Prompt2() {
     
    const {setHist2,setHlist2, hlist2, showprompt, date2, desc2,setDesc2 , setDate2, setShowprompt2, showprompt2, expense, setBalance, balance, setExpense , subtractamt, setSubtractamt } = useContext(expContext)
   
    const handleSave = () => {
      setExpense( expense + parseInt(subtractamt));
      setBalance(balance - parseInt(subtractamt));
        setHist2(true);
        setHlist2([...hlist2 ,[subtractamt,desc2,date2]]);
        setShowprompt2(false);
    }

    const handleChange = (e) => {
        setSubtractamt(e.target.value)
    }
   const dateChange =(e) => {
    setDate2(e.target.value)
   }
   const descChange = (e) => {
    setDesc2(e.target.value)
   }
  return (
    <div>
      {(showprompt2 && !showprompt) && <div>
        <h1>Add EXPENSE</h1>
        <h1>Cross</h1>
        <label>Amount</label>
        <input type="number" value={subtractamt} onChange={handleChange} />
        <label>Description</label>
        <input type="text" value={desc2} onChange={descChange} />
        <label>Date</label>
        <input type="date" value={date2} onChange={dateChange} />
        <button onClick={handleSave}>Save</button>
        </div>
        }
    </div>
  )
}

export default Prompt2