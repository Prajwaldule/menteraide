import Img from '../assets/react.svg'
import styled from "styled-components"

const Container = styled.div`
display: flex;
`

function logo() {
  return (
    <Container>
        <img src={Img}/>
        <h1>To-do-List</h1>
    </Container>
  )
}
export default logo