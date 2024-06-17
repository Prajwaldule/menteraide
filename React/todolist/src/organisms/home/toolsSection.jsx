import ToolsHead from "../../atoms/home/toolsHead"
import Tooldata from "../../data/home/toolsdata"
import Toolcards from "../../molecules/home/toolcards"
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
 justify-content: center;
 div{
    padding: 4vw 0vw;
 }
`

function toolsSection() {
  return (
    <Container>
        <ToolsHead/>
        <div>
        <Toolcards details={Tooldata}/>
        </div>
    </Container>
  )
}

export default toolsSection