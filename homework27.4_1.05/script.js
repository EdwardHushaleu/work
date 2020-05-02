
//1)Добавляем элемент в начало массива
var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest']; 
cityArray.unshift('Minsk');
console.log(cityArray);

//2)Добавляем элемент в конец массива
var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest']; 
cityArray.push('Minsk');
console.log(cityArray);

//3)Удаляем элемент из массива (двумя способами)
var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest', 'Minsk'];   
delete cityArray [2];
console.log(cityArray);                                                                                                                    

var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest', 'Minsk'];   
cityArray.splice(2,1);
console.log(cityArray);                                                              

// 4)Удалили повторяющиеся значения из массива---????&????????
var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Hrodno', 'Mogilev', 'Brest', 'Minsk', 'Minsk'];
  result = [];
  for (var i = 0; i < cityArray.length; i++) {
      if(cityArray[i + 1] !== cityArray[i]){
        result.push(cityArray[i])
      }
    }
  console.log(result);

//5)  Выводим в консоль все числовые значения больше 7.
var valueArray = [ 25, 1, 34, 'Homel', 2, 3, 51, 8];
for (var i = 0; i < valueArray.length; i++ ){
  if(typeof valueArray[i] === 'number' && valueArray[i] > 7){
    console.log(valueArray[i]);
  }
};

 //6)Выводим в консоль все строковые значения массива, длина которых больше 5.
 var cityArray = ['Homell', 'Hrodno', 5, 'Vitebsk', 'Mogi', 4 , 'Brest', 'Minsk'];
for (var i=0; i < cityArray.length; i++){
  if (typeof cityArray === 'string' && cityArray[i].length > 5){
    console.log(cityArray[i]);
  }
};

//7 Перебираем массив и выводим сообщение на каждую итерацию.
var array = [2, 'text', 3, false, 'cat', true];
for(var i = 0; i < array.length; i++){
  var q = array[i];
  if(typeof q === 'number'){
    console.log('This is a number');
  }
  
  else if(typeof q === 'string'){
    console.log('This is a string');
  }
  
  else {
    console.log('This is some type');
  }
};

//8)Задача пробежаться циклом по массиву и вывести message тех объектов, у которых isHidden не true
var randomArray = [
  {
    id: 6,
    message: 'Test',
    isHidden: true
  },
  {
    id: 4,
    message: 'tost',
    isHidden: false
  },
  {
    id: 7,
    message: 'post',
    isHidden: true
  }
  ];
  
  for (var i = 0; i < randomArray.length; i++){
    if(randomArray[i].isHidden === false){
      console.log(randomArray[i].message);
    }
  };

  //9
  var array = [
    {
      title:'hello man'
    },
    {
      title:'city'
    }
  ];
  
  for (var i = 0; i < array.length; i++){
    array[i].titleUppercased = array[i].title.toUpperCase();
  }
  console.log(array);
 
//10)Перебираем массив и выводим только те элементы, в которых содержится буква 'u'
var cityArray = ['Homuel', 'Hrodno', 'Vitebsuk', 'Mogilev', 'Breust', 'Minsk'];
for( var i = 0; i < cityArray.length; i++){
  if (cityArray[i].indexOf('u') > -1) {
    console.log(cityArray[i]);
  }
};

//11)Перебираем массив и выводим в консоль сообщение на каждую итерацию о том чётное перед нами число, либо нечётное
var valueArray = [ 25, 1, 34, 2, 3, 51, 8, 100];
for (var i = 0; i < valueArray.length; i++){
 if( valueArray[i] % 2 === 0){
 console.log('Even');
 } else{
   console.log('odd');
 }
};

//12)
var calc = function(func){
  var arr =[];
  func(10);
  arr.push(func(111));
  console.log(arr);
};

  calc(function(num){
 return num * num
 });
 
