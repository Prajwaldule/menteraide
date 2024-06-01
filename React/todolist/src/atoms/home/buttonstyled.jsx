 
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
width:50vw;
 button{
    display: flex;
    justify-content: center;
    background-color: skyblue;
    padding: 1vw 4vw;
 }

`
function buttonstyled(props) {
  return (
    <Container>
    <button>
        {props.buttonText}
    </button>
    </Container>
  )
}

export default buttonstyled 

 