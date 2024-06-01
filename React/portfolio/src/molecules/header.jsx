import Logotext from "../atoms/Logotext"
import Menuicon from "../atoms/Menuicon"
import styled from 'styled-components'
const Container = styled.div`
max-width:100vw;
    display:flex;
    justify-content:space-between;


`

function Header() {
  return (
    <Container>
        <Logotext/>
        <Menuicon/>
    </Container>
  
  )
}

export default Header