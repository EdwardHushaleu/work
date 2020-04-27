var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest']; //Добавляем элемент в начало массива
cityArray.unshift('Minsk');
console.log(cityArray);

var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest']; //Добавляем элемент в конец массива
cityArray.push('Minsk');
console.log(cityArray);

var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest', 'Minsk'];   //
cityArray.pop();
console.log(cityArray);                                                           //Удаляем элемент из массива (двумя способами)

var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Mogilev', 'Brest', 'Minsk'];   
cityArray.shift();
console.log(cityArray);                                                        //       

var cityArray = ['Homel', 'Hrodno', 'Vitebsk', 'Hrodno', 'Mogilev', 'Brest', 'Minsk', 'Minsk']; // Удалили повторяющиеся значения из массива---????&????????
var newcityArray = cityArray.filter(function(elem, pos) {
  return cityArray.indexOf(elem) == pos;                                                              
});
console.log(newcityArray);