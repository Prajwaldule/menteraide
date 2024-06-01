import ContactImg from "../assets/contact-me.png"
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
img{
    max-width: 10vw;
    min-height: 10vw;
}
`
 

function img2() {
  return (
    <Container>
        <img src={ContactImg} />
    </Container>
  )
}

export default img2