import ContactHead from "../../atoms/home/contactHead"
import Contacttext from "../../atoms/home/contacttext"
import Img from "../../atoms/home/img2"
import ButtonData from "../../data/home/buttondata"
import Conatctlink from "../../molecules/home/conatctlink"
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