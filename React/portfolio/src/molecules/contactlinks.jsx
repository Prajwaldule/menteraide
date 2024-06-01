import LinkedInImg from '../assets/linkedin.svg' 
import fbImg from '../assets/square-facebook.svg'
import ytImg from '../assets/youtube.svg'
import mailImg from '../assets/envelope-solid.svg'
import gitImg from '../assets/github.svg'
import styled from "styled-components"

const Container = styled.div`
 display: flex;
 padding:4vw;
 div{
  max-width: 5vw;
  min-height: 5vw;
 }
  .image{
    max-width:3vw;
    max-height:3vw;
    margin-left:2vw;
    
 }
 
 
` 
function Contactlinks() {
  return (
    <Container> 
       <a href="https://www.linkedin.com/in/prajwal-dule-5261a9208" >
        <div>
        <img style={{width:'5vw',height:'5vw'}} className='image' src={LinkedInImg} alt='linkedin' />
        </div>
   
       </a>

      <a>
         <img style={{width:'5vw',height:'5vw'}} className='image' src={fbImg} />
      </a>

      <a href='https://github.com/Prajwaldule'>
         <img style={{width:'5vw',height:'5vw'}} className='image' src={gitImg} />
      </a> 

      <a href='mailto:prajwaldule58@gmail.com'>
          <img style={{width:'5vw',height:'5vw'}} className='image' src={mailImg} />
        </a>

         <a href='https://youtube.com/@greed7936?si=PS84icJFPlytyC93'>
         <img style={{width:'5vw',height:'5vw'}} className='image' src={ytImg} />
        </a>
        
        
       
       

    </Container>
  )
}

export default Contactlinks