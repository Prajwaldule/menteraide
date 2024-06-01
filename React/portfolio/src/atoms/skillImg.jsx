import Figma from '../assets/figma.png' 
import Html from '../assets/html.png' 
import Css from '../assets/css-3.png' 
import React from '../assets/icons8-react-native.svg' 
import Webpack from '../assets/webpack.png' 
import Js from '../assets/icons8-js-480.svg' 
import styled from 'styled-components'
const Container = styled.div`
display: flex;
overflow: hidden;
div{
    @keyframes slide {
        from{
            transform:translateX(0)
        }
        to{
            transform:translateX(-89.5%)
        }
    }
    animation: 7s slide infinite linear;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        max-width:25vw;
        max-height:25vw;
        border:5px;
        box-shadow: 0 0 20px 10px peachpuff ;
        border-radius:2vw;
        margin: 3vw;
    }
    div img{
        padding:2vw;
        max-width:15vw;
        max-height:15vw;
    }
}

`
function skillImg() {
  return (
<Container>
<div>
        <div><img src={Figma}/></div>
        <div>  <img src={Html}/></div>
        <div><img src={Css}/></div> 
        <div><img src={Js}/></div>
        <div><img src={React}/></div>
        <div> <img className='webpack' src={Webpack}/></div>   
    </div>
        <div>
        <div><img src={Figma}/></div>
        <div>  <img src={Html}/></div>
        <div><img src={Css}/></div> 
        <div><img src={Js}/></div>
        <div><img src={React}/></div>
        <div> <img className='webpack' src={Webpack}/></div>   
    </div>
</Container>
  )
}

export default skillImg