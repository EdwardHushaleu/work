var textItem = document.getElementsByClassName('l-tasks__item-text');

var fun = function(num){
    if(typeof num === 'number' && num % 2 === 0){
        textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is even'
    }
    else (textItem[0].innerText = 'Number'+ ' ' + num + ' ' +'is odd')
      if( typeof num === 'undefined'){
        textItem[0].innerText = 'This is not a number'
      }  
};
fun(8);