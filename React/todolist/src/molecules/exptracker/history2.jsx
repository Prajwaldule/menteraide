import { useContext } from "react"
 
import { expContext } from "../../organisms/exptracker/exptrackerApp"


function History2() {
   const {  hist2, hlist2 } = useContext(expContext)
  return (
    <div>
    
     { (hist2) &&   
    hlist2.map((item, index) => (
        <div key={index}>
        <h1>{item[0]}</h1>
        <h1>{item[1]}</h1>
        <h1>{item[2]}</h1>

        </div>    
    ))}
             
    </div>
  )
}

export default History2