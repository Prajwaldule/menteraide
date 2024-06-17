import Links from "../../atoms/home/links"
import Logo from "../../atoms/home/logo"
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