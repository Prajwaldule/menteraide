import ContactHead from "../atoms/contactHead"
import Contacttext from "../atoms/contacttext"
import Img from "../atoms/img2"
import ButtonData from "../data/buttondata"
import Conatctlink from "../molecules/conatctlink"
import styled from "styled-components"

const Container = styled.div`
min-height: 85vh;

` 

function contactSection() {
  return (
    <Container> 
       <ContactHead/>
       <Img/>
       <Contacttext/>
       <Conatctlink details={ButtonData}/>
    </Container>
  )
}

export default contactSection