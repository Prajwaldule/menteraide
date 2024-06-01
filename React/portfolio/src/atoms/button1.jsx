import styled from "styled-components"

const Container = styled.div`
button{
    background-color: turquoise;
    padding: 1vw 2vw;
    border-radius:5vw;
    margin-top:2vw;
    a{
      text-decoration: none;
      color: black;
    }
}
` 
function Button1() {
  return (
    <Container>
        <button><a target="_blank" href="https://drive.google.com/file/d/1w8KsszDHMZgqP34wkkjF8svgI8fU59ex/view?usp=sharing">  Download CV</a>
          
        </button>
    </Container>
  )
}

export default Button1