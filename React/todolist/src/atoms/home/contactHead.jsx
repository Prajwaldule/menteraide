import styled from "styled-components"

const Container = styled.div`
padding: 5vw;
h1{
    text-align: center;

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