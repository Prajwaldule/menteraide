import Instagram from "../assets/instagram.png"
import Attherate from "../assets/arroba.png"
import Location from "../assets/gps.png"
import Phone from "../assets/phone-call.png"
import Youtube from "../assets/youtube.svg"
import Linkedin from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import Fb from "../assets/square-facebook.svg"
import styled from "styled-components"

 const Container = styled.div`
 display:flex;
 flex-direction:column;
 a{
   text-decoration: none;
   color: black;
 }
 .Info a img{
    max-width:2vw;
    max-height:2vw;
    
 }
 .Info{
    display:flex;
    flex-direction:column;
    padding:1vw;
 }
 .Info a{
    padding:1vw 2vw;
    display: flex;
    justify-content: flex-start;
 }
.bottom-img{
    width:2vw;
    min-height:2vw;
 }
 .logo a{
    padding:1vw 3vw;
 }
 .bottom-img2{
    width:2vw;
    min-height:2vw;
 }
 .logo2 a{
    padding:1vw 3vw;
 }
 .logo2{
    display:flex;
    justify-content:center;
 }
 .logo{
    display:flex;
    justify-content:center;
 }
 `
function contactmyinfo() {
  return (
    <Container>
        <div className="Info">
        <a href="mailto:prajwaldule58@gmail.com" className="mail">
        <img src={Attherate}/>
        <h3>prajwaldule58@gmail.com</h3>
        </a>
        <a href="tel:+91 8485861202">
        <img src={Phone}/>
        <h3>+91 8485861202</h3>
        </a>
        <a href="https://www.google.com/maps/place/Nagpur,+Maharashtra">
        <img src={Location}/>
        <h3>Nagpur , Maharashtra</h3>
        </a>
        </div>
       
       <div className="logo">
        <a href="https://www.linkedin.com/in/prajwal-dule-5261a9208"  >
        <img className="bottom-img" src={Linkedin}/>
        </a>
     <a href="https://github.com/Prajwaldule">
     <img className="bottom-img" src={Github}/>
     </a>
     <a href="https://youtube.com/@greed7936?si=PS84icJFPlytyC93">
     <img className="bottom-img" src={Youtube}/>
     </a>
        </div>       

       <div className="logo2">
        <a href="https://www.instagram.com/prajwal_dule">
        <img className="bottom-img2" src={Instagram}/>
        </a>
        <a href="https://www.facebook.com/prajwal.dule">
        <img className="bottom-img2" src={Fb}/>
        </a>
       </div>
    </Container>
  )
}

export default contactmyinfo