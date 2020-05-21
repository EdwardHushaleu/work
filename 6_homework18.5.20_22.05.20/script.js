var body = document.body;
var buttonColors = document.querySelector('button');
var colors = [];
var obj = {
  field1: 'Hello',
  field2: true,
  field3: ['#00bcd4', '#ffc107', '#2196f3'],
  field4: 575,
  field5: true,
};
var counter;


buttonColors.addEventListener('click', function(){
  
  if(!colors.length){
    for(var prop in obj){
    if(Array.isArray(obj[prop])){
    colors = obj[prop]
    };
    };
  };

  counter = Math.floor(Math.random() * colors.length);

  body.style.backgroundColor = colors[counter];
});

body.addEventListener('keyup', function(e){

  var isRightKey = e.keyCode === 39;
  var isLeftKey = e.keyCode === 37;
  
  if(isRightKey){
    if(counter === colors.length){
      counter = 0;
    } else if (counter >= 0) {
      counter++;
    } else {
    alert('Достаньте массив цветов!');
    }

    body.style.backgroundColor = colors[counter];
  }; 
  
   if(isLeftKey){
    if(counter === 0){
      counter = colors.length;
    } else if (counter <= colors.length) {
      counter--;
    } else {
    alert('Достаньте массив цветов!');
    }

    body.style.backgroundColor = colors[counter];
  };  
});



