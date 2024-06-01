const questionElement = document.getElementById('question');
const resulting = document.getElementById('result');
const Choices = document.getElementById('questions');
const score = document.getElementById('score');
const scoreHead = document.getElementById('scoreHead');
const container = document.getElementById('container');
let count =0 
let i = 0;
let qna = [];
function quizApi(){
    fetch("https://opentdb.com/api.php?amount=10&category=31&type=multiple")
    .then(response => response.json())
    .then(data => {
      qna = data.results;
      console.log(qna)
      function enterData(){
        resulting.innerHTML = ""
        questionElement.innerHTML = qna[i].question ;
        let allAnswers = qna[i].correct_answer +','+ qna[i].incorrect_answers;
        let Answers = allAnswers.split(',');
        let shuffletarget = [...Answers]
        console.log( Answers)
  
        function shuffleArray(array) {
          for (let j = array.length - 1; j > 0; j--) {
              const k = Math.floor(Math.random() * (j + 1));  
              [array[j], array[k]] = [array[k], array[j]];  
          }
          return array;
      }
      shuffleArray(shuffletarget);

      Choices.innerHTML = "";
  
      shuffletarget.forEach(element => {
          let choice = document.createElement('button');
          choice.textContent =  element;
          choice.classList.add('choice')
          Choices.appendChild(choice)
          choice.addEventListener('click' , function(event){
              const clickedButton = event.target;
              const selectedAnswer = clickedButton.textContent;
              if(i === 9){
                if(Answers[3] == selectedAnswer){
                    resulting.innerHTML = "CORRECT";
                    count++;
                    scoreHead.innerHTML = "YOUR SCORE IS"
                    score.innerHTML = count
                    container.innerHTML = '';

                    
                }else{
                    resulting.innerHTML = "INCORRECT"
                    scoreHead.innerHTML = "YOUR SCORE IS"
                    score.innerHTML = count
                    container.innerHTML = '';
                   
                }
             
              }else{
                if(Answers[3] == selectedAnswer){
                    resulting.innerHTML = "CORRECT";
                    choice.style.backgroundColor = "green"
                    count++;
                    i++;
                    setTimeout(enterData, 1000)
                }else{
                    resulting.innerHTML = "INCORRECT"
                    choice.style.backgroundColor = "red"
                    i++;
                    setTimeout(enterData, 1000)

                }
              }
             

           })
        
      });
      }

    
enterData()

    })
}
quizApi(); 
 