function getColor(){
    let color = '#';
    let char = 'abcdef1234567890'
    for (let index = 0; index < 6; index++) {
        let check=parseInt(Math.random() *16)
        console.log(check)
      let Char =  char[check]
        color += Char
        console.log(Char)
    }
     console.log(color)
     return color
}
getColor()

function changeColor(){
    const body = document.querySelector('body');
    body.addEventListener('click' , (e) =>{
        body.style.backgroundColor = getColor();
    })
}
changeColor();