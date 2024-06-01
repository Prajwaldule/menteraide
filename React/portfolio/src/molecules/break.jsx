 import styled from "styled-components"
import Dot from "../atoms/dot"
import Line from "../atoms/line"
 
const Container = styled.div`
display:flex;
justify-content:space-evenly;`
function Break() {
  return (
    <Container>
        <Dot/>
        <Dot/>
        <Line/>
    </Container>
  )
}

export default Break