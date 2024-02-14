/*Assignment 1  */
const fruits =[];

fruits.push('apple');
fruits.push('banana');
fruits.push('orange');

fruits.shift();

fruits.push('grape')

fruits[1] = 'pear';

console.log(fruits);


/*Assignment 2 */
 

const person = {}
person.name = 'John';
person.age = 30;
person.city = 'New York';

delete person.age;

person.job = "Engineer";

person.city = "San Francisco";

console.log(person);


/*Assignment 3 */
 
const cars =[];

const car1 ={  make: "Honda", model: "Civic" , year: 2020 }
const car2 ={  make: "Mercedes", model: "Benz",  year: 2022 }
const car3 ={  make: "Audi", model: "Q4",  year: 2023 }

cars.push(car1,car2,car3);

cars.shift(car1);

cars[1].model ='Accord'

console.log(cars);