const errorHendler = (errorE) => {console.log(errorE.message)};
let arr =[];
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

  xhr.send();
};

requestForUsers(function(user){
  arr.push(user);
  console.log(arr);
}, errorHendler);

//console.log(JSON.parse(xhr.response));