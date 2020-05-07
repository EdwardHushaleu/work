var textItem = document.getElementsByClassName('l-tasks__item-text');

var fun = function(num){
    if(typeof num === 'number' && num % 2 === 0){
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is even'
    }
    else { 
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is odd';
} 
};
fun(6);

var body = document.body
var buttonToggle = document.querySelectorAll('._toggle')[0];
var buttonRemuve = document.querySelectorAll('._remove')[0];
var ul = document.querySelector('.l-tasks');
var click = function (){
 body.classList.toggle('_color-scheme-light');
 ul.classList.toggle('l-tasks');
 buttonToggle.classList.toggle('l-tasks__btn')
 buttonRemuve.classList.toggle('l-tasks__btn')
};
buttonToggle.addEventListener('click', click);
