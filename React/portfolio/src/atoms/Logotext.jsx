 
import  styled from 'styled-components'

const Container = styled.div`
padding: 2vw 4vw 0vw 1.5vw;
h1{
    font-family: "Fuggles", cursive;
    font-size:clamp(2vw , 3rem , 6vw);
  
}
`
function Logotext() {
  return (
    <Container>
      
        <h1>
            Prajwal Dule
        </h1>
        
    </Container>
  )
}

export default Logotext