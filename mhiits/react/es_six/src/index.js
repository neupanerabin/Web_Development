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

// const square = function(number){
//   return number * number;
// }
// const squares = number => number * number;
// console.log(square(5));

/*
const jobs = [
  {id: 1, isActive: true}, 
  {id: 2, isActive: true},
  {id: 3, isActive: false},
];
const activeJobs = jobs.filter(function(job) {return job.isActive; });
const activeJobss = jobs.filter(job => job.isActive);

*/

/*
//Arrow Function
const person = {
  talk() {
    var self = this;
    setTimeout(()=> {    // function is replaced by =>
      console.log("self", self);
    }, 1000);
  }
};

person.talk();

*/

/*
// Array Map
const colors = ['red', 'green', 'blue'];
const items = colors.map(color=> '<li> ${color}</li>');
console.log(items);
*/

/*
// Object destracting
const address = {
  street: '',
  city: '',
  country: ''
};

const street = address.street;
const city = address.city;
const country = address.country;

const { street: st } = address;
*/

// Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const combineds = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(first);
console.log(clone);
