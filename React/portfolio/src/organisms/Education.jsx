import styled from "styled-components"
import EducationHead from "../atoms/educationHead"
import EducationData from "../data/educationdata"
import EducationCard from "../molecules/educationcard"
import Img from '../assets/book.png'

const Container = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
background-color: paleturquoise;
padding: 0vw 5vw;

` 
 

function Education() {
  return (
    <Container>
        <div>    
        <EducationHead/>
        <EducationCard details={EducationData}/>
        </div>
       
        <div>
            <img src={Img}/>
        </div>
    </Container>
  )
}

export default Education