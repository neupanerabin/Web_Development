/*const person = {
  name : 'Rabin',
  walk(){
    console.log(this);
  },
  talk(){} 
};
person.walk();

const walk = person.walk.bind(person);
walk();
*/

// Arrow Function

const square = function(number){
  return number * number;
}
const squares = number => number * number;
console.log(square(5));