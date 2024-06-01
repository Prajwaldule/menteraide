
import styled from 'styled-components'
 
const Container = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
row-gap: 5vw;
column-gap: 5vw;
padding:0vw 10vw;
.card img{
    max-width:10vw;
    max-height:10vw;
}
.card{
max-width:15vw;
min-height:20vw;    
display:flex;
flex-direction:column; 
justify-content:center;
align-items:center;
background-color: peachpuff;
padding:4vw 2vw;
border-radius:2vw;
box-shadow:0 0 2vw;
}
.icons img{
    max-width:3vw;
    max-height:3vw;
}
.icons{
    display:flex;
    justify-content:space-between;
    width:100%;
}
`

const Projectlistcard = (props) => {
  return (
    <Container>
        {props.Details.map( (detail,index ) => (
           <div className='card' key={index}>
            <h3>
                {detail.title}
            </h3>
            <img src={detail.img}/>
            <div className='icons'>
            <img src={detail.netlify}/>
            <img src={detail.github}/>
            </div>
           </div>
         
        ))}
       
    </Container>
  )
}

export default Projectlistcard