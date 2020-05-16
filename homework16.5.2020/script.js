var body = document.body;
var form = document.querySelector('.f-default');
var button = document.querySelector('.f-default__btn');

button.addEventListener('click', function(e){
  e.stopPropagation();
});

form.addEventListener('submit', function(e){
  e.preventDefault();

  var valueImail = e.target.elements.email.value;
  var valuePassword = e.target.elements.password.value

  if(!valueImail || !valuePassword){
  alert('Дружище, поля-то должны быть заполнены');
} else if (valuePassword && valuePassword.length < 10){
  alert('Капец пароль маленький, нужно больше циферок или букавок');
};
});

body.addEventListener('click', function(e){
  e.stopImmediatePropagation()
  console.log('BODY_1');
});

body.addEventListener('click', function(){
  console.log('BODY_2');
});

body.addEventListener('click', function(){
  console.log('BODY_3');
});