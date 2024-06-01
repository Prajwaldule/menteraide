import styled from "styled-components"

 const Container = styled.div`
 h1{
    text-align: center;
    width:100vw;
    padding:2vw;
 }
 `

function contactHead() {
  return (
    <Container>
        <h1>Contact Me</h1>
    </Container>
  )
}

export default contactHead