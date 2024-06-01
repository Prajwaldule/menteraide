import Icon from '../assets/bars-solid.svg'
import  styled from 'styled-components'
const Container = styled.div`
padding: 3vw 2vw 1.5vw 0vw;
 
`
function Menuicon() {
  return (
    <Container>
        <img src={Icon}></img>
    </Container>
  )
}

export default Menuicon