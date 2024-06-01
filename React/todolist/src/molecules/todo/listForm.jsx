import { useContext} from "react"
 
import ListHead from "../../atoms/todo/listHead"
import { todoContext } from "../../organisms/todo/todoApp"
import Completebutton from "../../atoms/todo/completebutton";
import styled from "styled-components";
import Deletebutton from "../../atoms/todo/deletebutton";
const Container = styled.div`
  
   .btn.line{
    text-decoration: line-through;
   }
   .btn.noline{
    text-decoration: none;
   }
`


function ListForm() {
    const { list, strike, } = useContext(todoContext);
    console.log("here", list)
  return (
    <Container >
       <ListHead />
        {Array.isArray(list)?list.map((item,index)=> (
          <div key={index}>
            <h1 className={`btn ${strike ? 'line' : 'noline'}`}>{item}</h1>
            <Completebutton />
            <Deletebutton index={index}/>

            {console.log("List ", list )}
          </div>  
        ))
        : <h1>{list}</h1>
      }
    </Container>
  )
}

export default ListForm