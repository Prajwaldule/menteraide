import styled from "styled-components"

const Container = styled.div`
button{
    padding:1vw 2vw;
    margin:1vw;
    border-radius:3vw;
    background-color:peachpuff;
 }
 display:flex;
 justify-content:flex-end;
` 

function button4() {
  return (
    <Container>
     <button>Send</button>
    </Container>
  )
}

export default button4