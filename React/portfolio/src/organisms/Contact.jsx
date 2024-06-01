import ContactHead from "../atoms/contactHead"
import ContactImg from "../atoms/contactImg"
import Contactmyinfo from "../molecules/contactmyinfo"
import Contacttextarea from "../molecules/contacttextarea"
import styled from "styled-components"

 const Container = styled.div`
 div{
    display:flex;
    background-color:paleturquoise;
 }

 ` 

function Contact() {
  return (
    <Container id="contactSection">
    <ContactHead/>
   <div>
    <Contacttextarea/>
    <Contactmyinfo/>
    <ContactImg/>
   </div>

    </Container>
  )
}

export default Contact