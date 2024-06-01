 
import { useState } from 'react'
import styled from 'styled-components'
 
const Container = styled.div`
display:flex;
justify-content:space-evenly;
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

.icons{
    display:flex;
    justify-content:space-between;
    width:100%;
    img{
    max-width:3vw;
    max-height:3vw;
    }
}
.icons-hovered{
    display:flex;
    justify-content:space-between;
    width:100%;
    img{
    max-width:4vw;
    max-height:4vw;
    }
}
`

const Projectcard = (props) => {
    const [isHovered, setIsHovered] =useState(false)
  const handleHover = () => {
    setIsHovered(!isHovered);
  }
  return (
    <Container>
        {props.details.map( (detail,index ) => (
           <div className='card' key={index}>
            <h3>
                {detail.title}
            </h3>
            <img src={detail.img}/>
            <div className={`icons ${isHovered ? 'icons-hovered' : ''}`} >
                <a href={detail.netlifyLink}>
                <img src={detail.netlify} onMouseEnter={handleHover} onMouseLeave={handleHover} />
                </a>
            <a href={detail.githubLink} >
               <img src={detail.github}onMouseEnter={handleHover} onMouseLeave={handleHover} />  
            </a> 
           
            </div>
           </div>
         
        ))}
       
    </Container>
  )
}

export default Projectcard