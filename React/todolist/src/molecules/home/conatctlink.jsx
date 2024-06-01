 
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
.card button{
   display: flex;
   padding: 0vw 2vw;
   margin: 0vw 2vw;
   background-color: skyblue;

   img{
    max-width: 2vw;
    min-height: 2vw;
   }
   p{
    padding: 0.5vw;

   }
}

`
function conatctlink(props) {
  return (
    <Container>
        {props.details.map( (detail,index) => (
            <div className="card" key={index}>
                <button>
                <img src={detail.img}/>
                <p>{detail.text}</p>
                </button>
              
                
            </div>
        ))}
   
    </Container>
  )
}
export default conatctlink