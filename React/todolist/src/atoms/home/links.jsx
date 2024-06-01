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
            
                <h1>
                    Home
                    </h1>
                <h1>Notes</h1>
                <h1>To-do</h1>
                <h1>Expense Tracker</h1>
                <h1>About</h1>

        </nav>
    </Container>
  )
}

export default links