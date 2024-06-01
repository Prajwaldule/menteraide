import styled from "styled-components"
import SkillHead from "../atoms/skillHead"
import SkillImg from "../atoms/skillImg"

const Container = styled.div`
background-color: paleturquoise;
padding:5vw;
`

function Skills() {
  return (
    <Container>
        <SkillHead/>
        <SkillImg/>
    </Container>
  )
}

export default Skills