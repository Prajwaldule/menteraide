 import styled from 'styled-components'
import HeroImg from '../assets/IMG-20230912-WA0010.jpg'

const Container = styled.div`
img{
  max-width:30vw;
  border-radius:45vw;
}
`
function Heroimg() {
  return (
    <Container> 
        <img src={HeroImg}/>
    </Container>
  )
}

export default Heroimg