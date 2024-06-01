const cityname = document.querySelector('#city');
const fetchbutton = document.querySelector('#fetch');
const info = document.querySelector('#info');
const temp = document.querySelector('#temp');

fetchbutton.addEventListener('click' , fetchData)
function fetchData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname.value +'&appid=62b51ca542b1d08a0ce97f03b19e27e4')
    .then(response => response.json())
    .then(data =>{
   
        info.innerHTML = data['weather'][0]['description']
        temp.innerHTML = data['main']['temp']

    })
}
 