import styled from "styled-components"
import AchieveHead from "../atoms/achieveHead"
import Achieveinfo from "../atoms/achieveinfo"

const Container = styled.div`
display:flex;
flex-direction:column;
max-width:50vw;
min-height:50vh;
padding:5vw;
justify-content:center;
`
function achievementinfo() {
  return (
    <Container>
        <AchieveHead/>
        <Achieveinfo/>
    </Container>
  )
}

export default achievementinfo