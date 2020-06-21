'use strict'
const errorHendler = (errorE) => {
  console.log(
    errorE.cod,
    errorE.message
    )
};
let male;
let female;
const requestForUsers = function (seccess, error, url){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://randomuser.me/api/?results=3' + url);
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

function arrayAll(){
  if (Array.isArray(male) && Array.isArray(female)){ 
    const newArr = [...male, ...female]; 
    ArrEnumeration(newArr);
    console.log(newArr)

  };

}

function createList(){
 return document.createElement('ul');
}

function createListItem({name}){
  const li = document.createElement('li');
  li.innerText = `${name.first} ${name.last}`;
  return li;
  
 }

 function ArrEnumeration (newArr){
  const ul = createList();

  for(let i = 0; i < newArr.length; i++){
    
    const li = createListItem(newArr[i])
    ul.appendChild(li);
    console.log(newArr[i]);
  }

   
  document.body.appendChild(ul);
 }

requestForUsers(function({results}){
  male = results;
  arrayAll();
 
}, errorHendler,
 '&gender=male');

requestForUsers(function({results}){
  female = results;
  arrayAll();
}, errorHendler,
'&gender=female');

