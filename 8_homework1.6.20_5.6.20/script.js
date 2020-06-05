'use strict'

//1)
func('Edik');
func();

function func(name = '%username%'){
  console.log(`Hello, ${name}`)
};

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

  item.country === 'USA' ? acc.usa.push(item.city) : acc.europe.push(item.city);

  return acc;

}, newObj)

console.log(newObj)

//3)
let arrNum = [2, 5, 6, 7, 381];
console.log('Минимальное значение: ' + Math.min.apply(null, arrNum));
console.log(`Максимальное значение: ${Math.max(...arrNum)}`);

//4)
let funcSum = (a, b) => a + b;

let curr = funcSum.bind(null, 5);
 console.log(curr(6));

//5)
setNum(10).plus(7).minus(2).getResult()

function setNum(arg){
  
  let ladder = {
    plus: function(arg1){
      arg += arg1;
      return this;
    },
    
    minus: function(arg2){
      arg -= arg2;
       return this;   
    },
    
    getResult: function(arg3){
      console.log(arg)
      return this;
    }
  }
  return ladder
}

//6)
let {usa, europe} = newObj;

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
