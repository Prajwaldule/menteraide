import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Container = styled.div`
button{
    background-color: paleturquoise;
    padding: 1vw 3vw;
    border-radius:5vw;
    margin-top:2vw;
}
` 
function Button2() {
  return (
    <Container>
      <AnchorLink href="#contactSection">
          <button> Contact</button>
      </AnchorLink>
        
    </Container>
  )
}

export default Button2