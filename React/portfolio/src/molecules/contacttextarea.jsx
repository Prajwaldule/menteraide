import styled from "styled-components"
import Button4 from "../atoms/button4"
import { useState } from "react"
 const Container = styled.div`
 display:flex;
 flex-direction:column;
 padding:2vw;

 input{
   border:0.3vw solid peachpuff;
   min-height:3vw;
   width:25vw;
   border-radius:2vw;
   background-color:paleturquoise;
 }
 label{
    transform:translate(2vw,0.7vw);
    background-color:paleturquoise;
    width:fit-content;
    padding:0vw 0.1vw;
 }
#msg{
    min-height:10vw;
}
 ` 

function Contacttextarea() {
  const [name, setName] = useState("Your Name")
  const [mail, setMail] = useState("Your Email")
  const [msg, setMsg] = useState("Your Message")

  const handleNamechange = (event) => {
 
    setName(event.target.value)
  }
  const handlemailchange = (event) => {
  
    setMail(event.target.value)
  }
  const handlemsgchange = (event) => {
   
    setMsg(event.target.value)
  }

  return (
    <Container>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleNamechange} />
        <label htmlFor="mail">Your Email</label>
        <input id="mail" type="email" value={mail} onChange={handlemailchange}/>
        <label htmlFor="msg">Message</label>
        <input id="msg" type="textarea" value={msg} onChange={handlemsgchange}/>
    <Button4/>    
    </Container>
  )
}

export default Contacttextarea