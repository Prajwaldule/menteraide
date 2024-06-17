import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
nav{
    display: flex;
   h1{
    padding: 0.2vw 2vw;
   } 
}

` 

function links() {
  return (
    <Container>
        <nav>  
                <Link to ='/'><h1>Home</h1></Link>
                <Link to = '/notes'><h1>Notes</h1></Link>
                <Link to ='/todo'><h1>To-do</h1></Link>
                <Link to = '/expensetracker'><h1>Expense Tracker</h1></Link>
               <Link to ="/about"><h1>About</h1></Link> 
        </nav>
    </Container>
  )
}

export default links