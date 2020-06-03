'use strict'

//1)
function func(name) {

    if(typeof(name) === 'string'){
        console.log(`Hello, ${name}`)
    } else {
           console.log('Hello, %username%');
    };
};

func('Edik');
func();

//2)

const arr = [
  {
    city: 'New York',
    country: 'USA'
  }, 
  {
    city: 'Paris',
    country: 'France'
  },
  {
    city: 'San Francisco',
    country: 'USA'
  },
  {
    city: 'Minsk',
    country: 'Belarus'
  }
];

let newObj ={
  usa: [],
  europe: []
};

arr.reduce(function(acc, item){

  if(item.country === 'USA'){
    acc.usa.push(item.city)
  } else {
    acc.europe.push(item.city)
  }

  return acc;

}, newObj)

console.log(newObj)

//3)
let arrNum = [2, 5, 6, 7, 381];
console.log('Минимальное значение: ' + Math.min.apply(null, arrNum));
console.log(`Максимальное значение: ${Math.max(...arrNum)}`);

//4)
function curr(f){
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

let funcSum = (a, b) => a + b;

let carreidSum = curr(funcSum);

console.log(carreidSum(2)(3));

//7)
const obj = {
    fistName: 'Yura',
    lastName: 'Alekseyev',
    job: 'web developer',
    
    printInfo: function() {
      console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
    }
  };

  obj.printInfo();
  
  const obj1 = {
    fistName: 'John',
    lastName: 'Kalligan',
    job: 'musician'
  };
  
obj.printInfo.call(obj1);
