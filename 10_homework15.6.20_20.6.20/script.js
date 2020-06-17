'use strict'
const errorHendler = (errorE) => {console.log(errorE.message)};
let arr =[];
let arr2 =[];
const requestForUsers = function (seccess, error){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomuser.me/api/?results=3&gender=male');
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status >= 200 && xhr.status < 300) {
        
        seccess(JSON.parse(xhr.response))

      } else{
          error({
            message: 'Error',
          });
      }
    }
  };

  xhr.open('GET','https://randomuser.me/api/?results=3&gender=female');
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status >= 200 && xhr.status < 300){
        seccess(JSON.parse(xhr.response))
      } else {
        error({
          message: 'Error',
        });
      }
    }
  };

  xhr.send();
};

requestForUsers(function(male){
  arr.push(male);
  console.log(arr);
}, errorHendler);

requestForUsers(function(female){
  arr2.push(female);
  console.log(arr2);
}, errorHendler);

//console.log(JSON.parse(xhr.response));