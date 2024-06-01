import styled from "styled-components"
import Img from '../assets/graduation-cap-solid.svg'
const Container = styled.div`
.card{
    display:flex;
    align-items: center;
    max-width:70vw;
    border-radius:2vw;
    margin:4vw 0vw;
    padding:2vw;
    background-color:peachpuff;
} 

img {
    max-width: 5vw;
    max-height: 5vw;
}

`

function masters(props) {
  return (
    <Container>
    {props.details.map( (detail,index ) => (
       <div className='card' key={index}>
       
        <img src={Img}/>
        <div>
        <h3>{detail.year}</h3>
        <h1>{detail.Course}</h1>
        <h3>{detail.College}</h3>
        </div>
   


       </div>
     
    ))}
   
</Container>
  )
}

export default masters