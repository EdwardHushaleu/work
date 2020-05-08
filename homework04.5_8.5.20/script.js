var body = document.body
var textItem = document.getElementsByClassName('l-tasks__item-text');
var buttonToggle = document.querySelector('.l-tasks__btn._toggle');
var buttonRemove = document.querySelector('.l-tasks__btn._remove');
var ul = document.querySelector('.l-tasks');
var arraySpan = document.getElementsByClassName('l-tasks__span');
var removeSpan;

var fun = function(num){
    if(typeof num === 'number' && num % 2 === 0){
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is even'
    } else{ 
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is odd';
};
};
var click = function (){
 body.classList.toggle('_color-scheme-light');
};

fun(4);
buttonToggle.addEventListener('click', click);

removeSpan = function(){
    if(body.classList.contains('_color-scheme-light')){
        arraySpan[0].remove();
    } else {
        arraySpan[arraySpan.length-1].remove()
    };
    buttonRemove.removeEventListener('click', removeSpan);    
};
buttonRemove.addEventListener('click', removeSpan);





