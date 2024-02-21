const next = document.getElementById('next');
const prev = document.getElementById('prev');
const content = document.getElementById('content');
const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ]; 
let i = 0;
content.innerHTML = '<h1>' + names[i] +'</h1>';

next.addEventListener('click' , (e) => {
    if(i !== names.length - 1 ){
        content.innerHTML = '<h1>' + names[i+1] +'</h1>';
        i += 1
    }else{
        i=0;
        content.innerHTML = '<h1>' + names[i] +'</h1>';
         
    }
   
})

prev.addEventListener('click' , (e) => {
    if(i !== 0 ){
        content.innerHTML = '<h1>' + names[i-1] +'</h1>';
        i -= 1
    }else{
        i = names.length - 1
        content.innerHTML = '<h1>' + names[i] +'</h1>';

    }
   
})
