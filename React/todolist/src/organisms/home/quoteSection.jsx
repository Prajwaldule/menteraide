import Quote from "../../atoms/home/quote"
import styled from "styled-components"

const Container = styled.div`
min-height: 50vh;
` 
 

function quoteSection() {
  return (
    <Container>
        <Quote/>
    </Container>
  )
}

export default quoteSection