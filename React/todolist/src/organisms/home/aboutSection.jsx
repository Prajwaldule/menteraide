import AboutHead from "../../atoms/home/aboutHead"
import Styledbutton from "../../atoms/home/buttonstyled"
import Img from "../../atoms/home/img1"
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