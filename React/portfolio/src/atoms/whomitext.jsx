import styled from "styled-components";
import Img from "../assets/programming.png";
const Container = styled.div`
display:flex;
justify-content:center;
padding:5vw;
h1{
    padding: 2vw 0vw;
}
img{
    max-width:55vw;
    max-height:25vw;
}
`
function whomitext() {
  return (
    <Container>
      <div>
        <h1>WHO I AM</h1>
        <h3>
          Hi there! I’m Prajwal Dule, a web developer with a passion for
          creating seamless user experiences. My toolbox includes React, CSS,
          HTML, and DBMS. When I’m not coding, you’ll find me exploring hiking
          trails or experimenting with new recipes. Let’s connect and build
          something amazing together! 🌟🚀
        </h3>
      </div>
      <img src={Img} />
    </Container>
  );
}

export default whomitext;
