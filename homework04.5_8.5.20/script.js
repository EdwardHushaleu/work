var body = document.body
var textItem = document.getElementsByClassName('l-tasks__item-text');
var buttonToggle = document.querySelector('.l-tasks__btn._toggle');
var buttonRemove = document.querySelector('.l-tasks__btn._remove');
var arraySpan = document.getElementsByClassName('l-tasks__span');
var definingEvenNumber = function(num){
    var type = 'odd';

    if (typeof num !== 'number'){
        return textItem[0].innerText = 'This is not a number'
    }

    if (num % 2 === 0){
        type = 'even';
    }

    textItem[0].innerText = 'Number ' + num + ' is ' + type;
};
var colorThemeSelectionHandler = function (){
    body.classList.toggle('_color-scheme-light');
};
var removeSpanHandler = function(){

    if(body.classList.contains('_color-scheme-light')){
        arraySpan[0].remove();
    } else {
        arraySpan[arraySpan.length-1].remove();
    };

    buttonRemove.removeEventListener('click', removeSpanHandler);    
};
definingEvenNumber(19);
buttonRemove.addEventListener('click', removeSpanHandler);
buttonToggle.addEventListener('click', colorThemeSelectionHandler);





