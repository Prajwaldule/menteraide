import React, { useState } from "react"
import Tracker from "../../molecules/exptracker/tracker";
import Prompt from "../../molecules/exptracker/prompt";
import Prompt2 from "../../molecules/exptracker/prompt2";
import History from "../../molecules/exptracker/history";
import History2 from "../../molecules/exptracker/history2";
import HistoryHead from "../../atoms/exptracker/historyHead";

 
export const expContext = React.createContext();
function ExptrackerApp() {
    const [balance, setBalance] = useState(0)
    const [ income , setIncome] = useState(0);
    const [ expense , setExpense] = useState(0);
    const [ addamt , setAddamt] = useState();
    const [ desc , setDesc] = useState();
    const [ desc2 , setDesc2] = useState();
    const [ date , setDate] = useState();
    const [ date2 , setDate2] = useState();
    const [ hist , setHist] = useState(false);
    const [ hist2 , setHist2] = useState(false);
    const [hlist, setHlist] = useState([]);
    const [hlist2, setHlist2] = useState([]);
    const [ subtractamt , setSubtractamt] = useState();
    const [showprompt, setShowprompt]= useState(false);
    const [showprompt2, setShowprompt2]= useState(false);

  return (
    <expContext.Provider value={{balance, setBalance, income, setIncome, showprompt, setShowprompt , expense, setExpense, addamt, setAddamt, setShowprompt2, showprompt2, subtractamt, setSubtractamt, date, date2, setDesc, setDesc2, setDate, setDate2, desc, desc2, hist, setHist, hist2, setHist2, hlist, setHlist, hlist2, setHlist2}}>
      <div>
      <Tracker/> 
       <Prompt/>
       <Prompt2/>
      </div>
      <HistoryHead/>
      <History/>
      <History2/>
    
       
    </expContext.Provider>
  )
}

export default ExptrackerApp