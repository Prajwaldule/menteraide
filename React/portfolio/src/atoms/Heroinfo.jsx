import styled from 'styled-components'

const Container = styled.div`
h1 {
 font-family: "Rubik Mono One", monospace;
 margin-top:1vw;

}
h3{
    font-family: "Azeret Mono", monospace;
    margin-top:2vw;

}`
function Heroinfo() {
  return (
    <Container>
        <h3>
            Web Developer
        </h3>
        <h1>Prajwal Dule</h1>
        <h3>
        Coding is a symphony of logic and creativity, where each line of code dances to its own rhythm. It’s a canvas where imagination meets precision—a place where problems unravel, and solutions emerge.
        </h3>
       
    </Container>
  )
}

export default Heroinfo