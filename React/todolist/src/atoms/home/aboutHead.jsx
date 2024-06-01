import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
height:50vh;
width:50vw;
h3{
    padding: 1vw 6vw;
    text-align: justify;
}
`
function aboutHead() {
  return (
    <Container>
        <h1>To-Do-List</h1>
        <h3>
        This is a simple tools project made with React.js. There are 3 main tools in this project: Todo List, Note, and Expense Tracker. It is not a perfect app, but it is a good starting point for learning React.js. This is my first experience with React.js, and I hope you enjoy using this app. If you encounter any bugs contact me!, I will do my best to fix them.
        </h3>
    </Container>
  )
}

export default aboutHead