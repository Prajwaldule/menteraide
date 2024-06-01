import Achievementcard from "../molecules/achievementcard";
import Achievementdata from "../data/achievementsdata";
import Achievementinfo from "../molecules/achievementinfo";
import styled from "styled-components";


const Container = styled.div`
display:flex;
background-color: paleturquoise;
`

function Achievements() {
  return (
    <Container>
       <Achievementinfo/>
       <Achievementcard details={Achievementdata}/>
    </Container>
  )
}

export default Achievements