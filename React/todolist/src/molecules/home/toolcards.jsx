import styled from "styled-components"

const Container = styled.div`
display: flex;
padding: 5vw;
background-color: #d4d4d4;
margin:1vw;
border: 0vw solid black;
box-shadow: 0  0 2vw ;

.card{
    display: flex;
    padding: 2vw;
    margin:1vw;
    border: 0vw solid black;
    box-shadow: 0  0 2vw ;
    img{
        max-width: 8vw;
        min-height: 8vw;
        padding: 0.5vw;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1vw;
    }
}
`


function toolcards(props) {
  return (
    <Container>
 {props.details.map( (detail,index ) => (
       <div className='card' key={index}>
        <img src={detail.img}/>
        <div>
        <h1>{detail.head}</h1>
        <h3>{detail.desc}</h3>
        </div>
       </div>
     
    ))}
    </Container>
  )
}

export default toolcards