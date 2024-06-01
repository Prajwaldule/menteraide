import serviceData from "../data/servicedata"
import Servicecard from "../molecules/servicecard"
import ServiceHead from "../atoms/serviceHead";
import styled from "styled-components"

 const Container = styled.div`
 background-color: peachpuff;`
function Services() {
  return (
    <Container>
     <ServiceHead/>   
     <Servicecard details={serviceData} />
    </Container>
  )
}

export default Services