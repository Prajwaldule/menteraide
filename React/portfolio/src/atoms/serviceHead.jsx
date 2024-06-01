import styled from "styled-components"

 const Container = styled.div`
 h1{
    text-align: center;
    padding:4vw;
 }
 `

function serviceHead() {
  return (
    <Container>
        <h1>Services</h1>
    </Container>
  )
}

export default serviceHead