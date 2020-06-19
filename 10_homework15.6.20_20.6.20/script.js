'use strict'
const errorHendler = (errorE) => {
  console.log(
    errorE.cod,
    errorE.message
    )
};

const requestForUsers = function (seccess, error, url){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomuser.me/api/?results=3&' + url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status >= 200 && xhr.status < 300) {
        
        seccess(JSON.parse(xhr.response))

      } else{
          error({
            cod: xhr.status,
            message: xhr.responseText,
          });
      }
    }
  };

  xhr.send();
};




requestForUsers(function(male){
  console.log('male', male.results);
  let maleArr = male.results;
  
  maleArr.forEach(function(item){
      console.log(item.name.first)
  });
 
}, errorHendler,
 '=male');

requestForUsers(function(female){
  console.log('female',female.results);
  let femaleArr = female.results;

  femaleArr.forEach(function(item){
    console.log(item.name.first)
  })
  
}, errorHendler,
'=female');

