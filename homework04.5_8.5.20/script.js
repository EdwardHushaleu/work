var body = document.body
var textItem = document.getElementsByClassName('l-tasks__item-text');
var buttonToggle = document.querySelector('.l-tasks__btn._toggle');
var buttonRemove = document.querySelector('.l-tasks__btn._remove');
var ul = document.querySelector('.l-tasks');
var arraySpan = document.getElementsByClassName('l-tasks__span');
var removeSpan;
var spansState = { 
    isFirstSpanDelited: false,
    isSecondSpanDelited: false, 
}

var fun = function(num){
    if(typeof num === 'number' && num % 2 === 0){
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is even'
    } else{ 
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is odd';
} 
};
var click = function (){
 body.classList.toggle('_color-scheme-light');
 ul.classList.toggle('l-tasks');
 buttonToggle.classList.toggle('l-tasks__btn')
 buttonRemove.classList.toggle('l-tasks__btn')
};

fun(4);
buttonToggle.addEventListener('click', click);

removeSpan = function(){
    if(body.classList.contains('_color-scheme-light') && !spansState.isFirstSpanDelited ){
        arraySpan[0].remove();
        spansState.isFirstSpanDelited = true;
    } 
    if(!body.classList.contains('_color-scheme-light') && !spansState.isSecondSpanDelited ){
        arraySpan[arraySpan.length-1].remove();
        spansState.isSecondSpanDelited = true;
    } 
};
buttonRemove.addEventListener('click', removeSpan);





