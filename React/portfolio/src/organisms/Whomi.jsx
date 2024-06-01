import styled from "styled-components";
import Break from "../molecules/break";
import Whomitext from "../atoms/whomitext";

const Container = styled.div`
padding:2vw 0vw;
background-color: paleturquoise` 

function Whomi() {
  return (
    <Container>
      <Break/>
      <Whomitext/>
    </Container>
  )
}

export default Whomi