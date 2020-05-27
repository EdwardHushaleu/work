// 1)
var arr = [1, 'крот', 47, 'Юпитер', 77];
var arrCopy = arr.concat();
console.log(arrCopy);

// 2)
var moto = {
    color: 'red',
    size: 600,
    maxSpeed: 320        
};
var newMoto = {};

for(var prop in moto){
    newMoto[prop] = moto[prop]
}
console.log(newMoto);

//3) 
function  printSquareRoot (x, func){

    func(x)  
}

function func (x){
    console.log(Math.sqrt(x));
}

printSquareRoot(9, func);

//4
var value = other();

function  other(){
    var array = [];
    
    function inner(arg){
        array.push(arg)
        console.log(array)
       
        if(array.length === 5){
            array.length = 0;
        };
    }
    return inner
}

value(1);
value(2);
value(3);
value(4);
value(5);
value(6);
value(7);
value(8);
value(9);
value(10);


//5)   
var button = document.querySelector('button');

  button.addEventListener('click', (function(){
    var counter = 0
    
    function buildClick(){
      button.innerText = 'Ты нажал: ' + ++counter;
      
    }
    return buildClick
}()));
       
    



