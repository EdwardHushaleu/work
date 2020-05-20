var body = document.body;
var buttonColor = document.querySelector('button');
var color = [];
var obj = {
  field1: 'Hello',
  field2: true,
  field3: ['#00bcd4', '#ffc107', '#2196f3'],
  field4: 575,
  field5: true,
};

buttonColor.addEventListener('click', function() {

  var randomColors = Math.floor(Math.random() * color.length-1);
  
  for(var prop in obj){
    if(Array.isArray(obj[prop])){
      color.push(...obj[prop]);
    };
  };
  
  body.style.backgroundColor = color[randomColors];
});

document.addEventListener('keydown', function(e){
  
  if(e.keyCode === 39){
    
  }

})

