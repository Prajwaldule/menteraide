import styled from "styled-components"
import Button5 from "../atoms/button5"
import ProjectHead from "../atoms/projectHead"
import ProjectlistData from "../data/projectlistData"
import Projectlistcard from "../molecules/projectlistCard"
const Container = styled.div`
background-color: paleturquoise;
`

function Projectlist() {
  return (
    <Container>
      <ProjectHead />
      <Projectlistcard Details={ProjectlistData}/>
      <Button5 />
    </Container>
  )
}

export default Projectlist