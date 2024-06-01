import Contactlinks from "../molecules/contactlinks"
import Header from "../molecules/header"
import Hero from "../molecules/Hero"
import styled from "styled-components"

const Container = styled.div`
 background: linear-gradient(
    to right,
    peachpuff 0%,
    peachpuff 35%,
    paleturquoise 35%,
    paleturquoise 100% 
 );
` 
 

function Introduction () {
  return (
    <Container> 
        <Header/>
        <Hero/>
        <Contactlinks/>
    </Container>
  )
}

export default Introduction 