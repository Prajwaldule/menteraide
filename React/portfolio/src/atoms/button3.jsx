import styled from "styled-components"
import {Link} from 'react-router-dom'
const Container = styled.div`
width:100%;
display: flex;
justify-content:flex-end;
button{
    background-color: peachpuff;
    padding: 1vw 3vw;
    border-radius:5vw;
    margin:4vw;

}
` 
function Button3() {
  return (
    <Container>
      <Link to = "/moreprojects">
      <button>
            View More
      </button>
      </Link>       
    </Container>
  )
}

export default Button3