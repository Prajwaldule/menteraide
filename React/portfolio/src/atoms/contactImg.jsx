import styled from "styled-components";
import Navigation from "../assets/navigation.svg";
const Container = styled.div`
width:50vw;
min-height:30vw;
`
function contactImg() {
  return (
    <Container>
          <img src={Navigation}/>
    </Container>
  )
}

export default contactImg