import styled from "styled-components"
const Container = styled.div`
.card{
    display:flex;
    justify-content:space-between;
    align-items: center;
    max-width:70vw;
    border-radius:2vw;
    margin:4vw 0vw;
    padding:2vw;
    background-color:peachpuff;
    text-decoration: none;
} 
.title{
  text-decoration: none;
  color: black;
}
.date{
  color: black;
}
img {
    max-width: 5vw;
    max-height: 5vw;
}`

function achievementcard(props) {
  return (
    <Container>
    {props.details.map( (detail,index ) => (
       <a href={detail.link} className='card' key={index}>
   
        <div >
     
          <h3 className="title">{detail.title}</h3>
        <h1>{detail.description}</h1>
        <h3 className="date">{detail.date}</h3>
   
        </div>
         <img src={detail.img}/>


       </a>
     
    ))}
   
</Container>
  )
}

export default achievementcard