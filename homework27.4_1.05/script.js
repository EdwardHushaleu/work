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
cityArray.pop();
console.log(cityArray);                                                           

var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest', 'Minsk'];   
cityArray.shift();
console.log(cityArray);                                                             
// 4)Удалили повторяющиеся значения из массива---????&????????
var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Hrodno', 'Mogilev', 'Brest', 'Minsk', 'Minsk'];
  result = [];
  for (var i = 0; i < cityArray.length; i++) {
      if(cityArray[i + 1] != cityArray[i]){
        result.push(cityArray[i])
      }
    }
  console.log(result);
//5) 
var max = 7;
 var valueArray = [ 25, 1, 34, 'Homel', 2, 3, 51, 8,];
 for (var i = 0; i < valueArray.length; i++ ){
   if ( valueArray[i] > max){
    console.log(valueArray[i]);
   }
 };
 //6
 var cityArray = ['Homell', 'Hrodno', 5, 'Vitebsk', 'Mogi', 4 , 'Brest', 'Minsk'];
for (var i=0; i < cityArray.length; i++){
  if (cityArray[i].length > 5){
    console.log(cityArray[i].length); 
  }
}
 //11)
 var valueArray = [ 25, 1, 34, 2, 3, 51, 8, 100];
 for (var i = 0; i < valueArray.length; i++){
  if( valueArray[i] % 2 === 0){
  console.log('Even');
  } else{
    console.log('odd');
  }
};
//10)




 
