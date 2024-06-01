import Links from "../atoms/links"
import Logo from "../atoms/logo"
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5vw 2vw;
background-color:black;
color: white;
`

 
function header() {
  return (
    <Container>
        <Logo/>
        <Links/>
    </Container>
  )
}

export default header