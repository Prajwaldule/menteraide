import styled from "styled-components"
import ProjectData from "../data/projectData" 
import Projectcard from "../molecules/projectcard"
import ProjectHead from "../atoms/projectHead"
import Button3 from "../atoms/button3"
const Container = styled.div`
background-color: paleturquoise;
`
function Projects() {
  return (
    <Container>
    <ProjectHead/>    
     <Projectcard details={ProjectData}/>
     <Button3/>
    </Container>
  )
}

export default Projects