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

//3)
let arr = [2, 5, 6, 7, 381];
console.log('Минимальное значение: ' + Math.min.apply(null, arr));
console.log(`Максимальное значение: ${Math.max(...arr)}`);

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
