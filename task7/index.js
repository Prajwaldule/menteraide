
/*Assignment 1:
Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero. */
console.log("Assignment 1")
 let num = 0

function checkNumber(num){
    if(num>0){
          console.log('positive')
    }else if (num<0){
        console.log('negative')
        
    }else {
        console.log('0')
    }
}
checkNumber(num)

/*Assignment 2:
Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.*/ 
console.log("Assignment 2") 
num = 2
let sum = 1;
 function Factorial(num){
    for (let index = 1; index <= num; index++) {
         sum *= index ;
    }
    console.log(sum);

 }
 Factorial(num);

/*Assignment 3:
Write a JavaScript function that takes two numbers as parameters and returns the larger one. */
console.log("Assignment 3") 
let num1 = 2;
let num2 = 8;
function Max(num , num2){
    console.log(Math.max(num1,num2));

}
Max(num1, num2);

/*Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).  */
console.log("Assignment 4") 
let word = 'P0pp'
function Palindrome(string){
    let newWord = '';
    string = string.toLowerCase();
   string = string.replace(/[^a-zA-Z0-9]/g, '')
   for (let i = string.length-1; i >= 0; i--) {
    newWord += string[i];
   }
   if (string.includes(newWord)){
    console.log('It is a Palindrome')
   }else{
    console.log('It is not a Palindrome');
   }
}
Palindrome(word);

/*Assignment 5:
Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. */
console.log("Assignment 5") 
let number = 5
function Prime(v){   
    for(let i = 2 ; i <= v ; i++){
        let isPrime = true;
    for(let k = 2 ; k < i ; k++){
            if(i % k === 0){
            isPrime = false ;
            break;
        } 
    }
    if(isPrime){
        console.log(i);     
    }    
    } 
}
Prime(number);

/*Assignment 6:
Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation. */
console.log("Assignment 6") 
function Calculator(x,y,op){
    if(op === '+'){
        console.log(x + y);
    }
    else if(op === '*'){
        console.log(x * y);
    } 
    else if(op === '/'){
        if(y===0){
            console.log('Division by Zero')
        }else{
           console.log(x / y); 
        } 
    } 
    else if(op === '-'){
        console.log(x - y);
    }
     
}
Calculator(15,0,'/');

/*Assignment 7:
Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. */
console.log("Assignment 7") 
function vowelsCounter(string){
    let vowels = 'a,e,i,o,u' ;
    let count = 0 ;
    for (let index = 0; index < string.length; index++) {
        for (let i = 0; i < vowels.length; i++) {
             if(string[index] === vowels[i] ){
                count ++ ;
             }
            
        }
       
    }
    console.log(count);
}
vowelsCounter('Prajwal')

/*Assignment 8:
Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. */
console.log("Assignment 8")
function perfectNumber(num) {
    if(num <=0){
        return false;
    }
    let array = []
    let sum =0;
  
       for (let i = 1; i <= Math.round(num/2) ; i++) {
        if(num % i === 0){
            sum += i;
            array.push(i)
        }
    } 
    if(sum === num){
        console.log("Its PerFect Number")
        console.log(array)
    }
    else{
        console.log("Its not PerFect Number")
    }
} 
perfectNumber(28);


/*Assignment 9:
Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones. */
console.log("Assignment 9")

function Fibonacci(num){
    let series=[0,1];
  
    for (let index = 2; index <= num; index++) {
        series[index] = series[index-1] + series[index-2]
         
    }
    console.log(series)
}
 
Fibonacci(5)

/*Assignment 10:
Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10*/
console.log("Assignment 10") 
function Table(num){
    for (let index = 1; index <=10; index++) {
        console.log(num + ' x' + index + ' = ' + num*index)
        
    }
}
Table(10)