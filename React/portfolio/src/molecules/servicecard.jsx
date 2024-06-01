import styled from "styled-components"

const Container = styled.div`
display:grid;
grid-template-columns:repeat(3 , 1fr);
.card{
    text-align:center;
    padding:2vw;
    margin: 1vw 2vw;
    background-color:paleturquoise;

}
img{
    max-width:5vw;
    max-height:5vw;
}
`


const servicecard =(props) => {
  return (
    <Container>
        {props.details.map((detail,index) => (
            <div className="card" key={index}>
                <img src={detail.img}/>
                <h3>{detail.title}</h3>
            </div>    
        ))}
    </Container>
  )
}

export default servicecard