'use strict';

const usersRequest = function (callback){
  const users = [
    {
      id: 1,
      fistName: 'Chloe',
      lastName: 'Snyder'
    },  
    {
      id: 44,
      fistName: 'Valdemar',
      lastName: 'Larsen'
    },
    {
      id: 342,
      fistName: 'Curtis',
      lastName: 'Garza'
    },
    {
      id: 2,
      fistName: 'Sedef',
      lastName: 'Sezek'
    },
    {
      id: 24,
      fistName: 'Emile',
      lastName: 'Taylor'
    }
  ];
  
  setTimeout(function(){
    callback(users)
  }, 1000);
};

const countriesRequest = function (callback){

  const countries = [
    {
      userId: 44,
      country: 'Germany'
    },
    {
      userId: 1,
      country: 'Canada'
    },
    {
      userId: 342,
      country: 'Brazil'
    },
    {
      userId: 24,
      country: 'Denmark'
    },
    {
      userId: 2,
      country: 'Ireland'
    }
  ];
  
  setTimeout(function(){
    callback(countries)
  }, 1000);
};

export{usersRequest, countriesRequest}
 

 
