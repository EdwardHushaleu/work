var body = document.body
var bShooter = document.querySelector('.b-shooter');
var bShooterAim = document.querySelector('.b-shooter__aim');
var bShooterImgAim = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var bShooterImgFire = document.querySelector('.b-shooter__img-fire')
var delayToReset = 500;
//Анимация в момент поподания
var animation = `opacity: 0;
                transition-duration: ${delayToReset * 0.6}ms;
                transition-delay: ${delayToReset * 0.4}ms;`;

bShooter.addEventListener('click', function(e){
     var x = e.offsetX - bShooterAim.offsetWidth / 2;
     var y = e.offsetY - bShooterAim.offsetHeight / 2;
     var limitX = bShooter.offsetWidth - bShooterAim.offsetWidth;
     var limitY = bShooter.offsetHeight - bShooterAim.offsetHeight;

    if(x < 0){
        x = 0
    } else if(x > limitX){
        x = limitX;
    };

    if(y < 0){
        y = 0
    } else if(y > limitY){
        y = limitY;
    };

    bShooterAim.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});

body.addEventListener('keydown', function(e){
    
    if(e.keyCode === 13){
        bShooterImgAim.style.transform ='scale(.9)';
    }
    
});

body.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        //находим координаты методом getBoundingClientRect() у элемента bShooterImgAim
        var coordShooter = bShooterImgAim.getBoundingClientRect();

        //вычислем полученые координаты, aimCenterX и aimCenterY, которые будут являться центром изображения прицела.
        var aimCenterX = coordShooter.x + coordShooter.width / 2;
        var aimCenterY = coordShooter.y + coordShooter.height / 2;
        
        // с помощю метода getBoundingClientRect() берем значения left, top, right и bottom для Hitbox .
        var coordGhost = ghost.getBoundingClientRect();

        bShooterImgAim.style.transform = '';  

        //проверка, попадают ли координаты геометрического центра прицела в наш хитбокс
        if(aimCenterX < coordGhost.right - 20
           && aimCenterX > coordGhost.left + 20
           && aimCenterY > coordGhost.top - 20
           && aimCenterY < coordGhost.bottom + 20
           ){
            //В момент попадания в цель появляется изображение огня 
            bShooterImgFire.style.visibility ='visible';
            //задаётся длительность анимации, задержка изображение огня и opacity 0
            bShooterImgFire.style.cssText +=animation;
            //тоже задаётся длительность анимации, задержка и opacity 0
            ghost.style.cssText += animation;
            // скрываем прицел после попадания 
            bShooterImgAim.style.display = 'none';
            // при поподании в призрака ставим анимацию перемешения на паузу
            ghost.style.animationPlayState = 'paused' 

            // после запуска анимации Удаляем все стили после регистрации setTimeout время отложенного запуска которого будет равняться delayToReset 
            setTimeout(function(){
                bShooterImgFire.removeAttribute('style');
                ghost.removeAttribute('style');
                bShooterImgAim.style.display = '';
                bShooterImgFire.style.visibility = 'hidden';
                ghost.style.display = 'none';
            },delayToReset)
        }
    }
    
});

function setRandomCoords(){
    //оперируем размерами игровой области и размерами картинки с приведением                                                 
    var limitX = bShooter.offsetWidth - ghost.offsetWidth;
    var limitY = bShooter.offsetHeight - ghost.offsetHeight;

    //генерируем случайную пару x, y допустимых координат
    var x = Math.floor(Math.random() * (limitX + 1));
    var y = Math.floor(Math.random() * (limitY + 1));

    //полученные координаты задаем как top и left для .b-shooter__img-ghost
    ghost.style.top = y + 'px';
    ghost.style.left = x + 'px';
}

//реализовываем расписание появления приведения с помощью setInterval в 3 секунды
setInterval(function(){
    //проверка стилевого правила display у картинки .b-shooter__img-ghost
    if(ghost.style.display === 'none'){
        ghost.style.display = '';
    };
    
    /*что бы призрак при удалении не перемещался по случайным координатам добавляем проверку на наличие
        свойства paused у .b-shooter__img-ghost. Если свойство есть, то запуск setRandomCoords происходить не должен.*/
    if(ghost.style.animationPlayState === 'paused'){
        return;
    } else {
        //безусловный вызов setRandomCoords
        setRandomCoords();
    }

    
}, 2000);

