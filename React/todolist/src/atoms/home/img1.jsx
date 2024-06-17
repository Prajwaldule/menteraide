import Img from "../../assets/react.svg"

import styled from "styled-components"

const Container = styled.div`
img{
    max-width: 40vw;
    min-height: 40vw;
}
`

function img1() {
  return (
    <Container>
        <img src={Img}/>
    </Container>
  )
}

export default img1