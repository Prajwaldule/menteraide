import styled from "styled-components"

const Container = styled.div`
padding-top: 15vw;
padding: 2vw;
h1{
    text-align: center;
    padding: 1vw
}
h3{
    text-align: center;
}
` 

function quote() {
  return (
    <Container>
        <h1>Quote of the Day</h1>
        <h1>&quot;Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully.&quot;</h1>
        <h3>-&quot;Kuro Sensei &quot;</h3>
    </Container>
  )
}

export default quote