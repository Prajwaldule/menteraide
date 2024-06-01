import styled from "styled-components"

const Container = styled.div`
background-color: skyblue;
padding: 2vw;
h4{
    text-align: center;
}
`

function footer() {
  return (
    <Container>
        <h4> All Rights Reserved </h4>
    </Container>
  )
}

export default footer