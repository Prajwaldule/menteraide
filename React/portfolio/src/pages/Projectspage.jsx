import styled from "styled-components"
import Projectlist from "../organisms/Projectlist"
const Container = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
`
 

function Projectspage() {
  return (
    <Container>
        <Projectlist />
    </Container>
  )
}

export default Projectspage