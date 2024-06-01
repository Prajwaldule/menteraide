import AboutHead from "../atoms/aboutHead"
import Styledbutton from "../atoms/buttonstyled"
import Img from "../atoms/img1"
import styled from "styled-components"

const Container = styled.div`
display: flex;
`
function aboutSection() {
  return (
    <Container>
    <div>
     <AboutHead/>
     <Styledbutton buttonText={"More"}/>
     </div>
    <Img/>
    </Container>
  )
}

export default aboutSection