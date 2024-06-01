import { useContext } from "react"
import { expContext } from "../../organisms/exptracker/exptrackerApp"

 
function Prompt() {
     
    const {setHist,hlist, showprompt2,date, desc, setDate, setHlist, setDesc, showprompt,setShowprompt, income, setBalance, balance, setIncome , addamt , setAddamt} =useContext(expContext)
 
    const handleSave = () => {    
        setIncome( Number(addamt) + Number(income) )
        setBalance((Number(balance) + Number(addamt) ));
       setHist(true)
      setHlist([...hlist ,[addamt,desc,date]])
        setShowprompt(false);
    }

    const handleChange = (e) => {
    
        setAddamt(e.target.value);
    }
   const dateChange = (e) => {
    setDate(e.target.value)
   }
   const descChange = (e) => {
    setDesc(e.target.value)
   }
  return (
    <div>
      {(showprompt && !showprompt2) && <div>
        <h1>Add Income</h1>
        <h1>Cross</h1>
        <label>Amount</label>
        <input type="number" value={addamt} onChange={handleChange}/>
        <label>Description</label>
        <input type="text" value={desc} onChange={descChange} />
        <label>Date</label>
        <input type="date" value={date} onChange={dateChange}/>
        <button onClick={handleSave}>Save</button>
        </div>
        }
        
    </div>
  )
}

export default Prompt