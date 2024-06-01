import Heroimg from "../atoms/Heroimg"
import Heroinfo from "../atoms/Heroinfo"
import Button1 from "../atoms/button1"
import Button2 from "../atoms/button2"
import styled from "styled-components"
 
const Container = styled.div`
display:flex;
div{
    padding: 0vw 2vw;
   
},
`

function Hero() {
  return (
    <Container>
        <Heroimg/>
        <div>
        <Heroinfo/>
        <Container>
        <Button1/>
        <Button2/>
        </Container>
  
        </div>
       
    </Container>
  )
}

export default Hero