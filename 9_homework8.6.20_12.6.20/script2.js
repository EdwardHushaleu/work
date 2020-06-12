'use strict';
import {usersRequest, countriesRequest} from './script.js'

function createList(){
  return document.createElement('ul')
};

function createListItem(text){
  const li = document.createElement('li');

  li.innerText = text;

  return li;
}


usersRequest(function(users){
  
  countriesRequest(function(countries){
     
    
    const newArr = users.map((usersItem) => {
      const { country } = countries.find((countriesItem) => countriesItem.userId === usersItem.id);
 
      return {...usersItem, country}
      
    });
   
    const ul = createList();
    
    document.body.appendChild(ul);
    
    function outerList(i, arg){
      const li = createListItem(`First Name: ${arg[i].fistName} 
                                 Last Name: ${arg[i].lastName} 
                                 Country: ${arg[i].country}`); 
      ul.appendChild(li);
    }
  
    for(let i = 0; i < newArr.length; i++ ){
      outerList(i, newArr);
    }  
    
  });
});
 

 
