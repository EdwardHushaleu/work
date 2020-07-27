var body = document.body
var bShooter = document.querySelector('.b-shooter');
var bShooterAim = document.querySelector('.b-shooter__aim');
var bShooterImgAim = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var bShooterImgFire = document.querySelector('.b-shooter__img-fire');
var delayToReset = 500;
var progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
var isGameOver = false;
var healthIcon = document.querySelectorAll('.b-shooter__health-icon');
var bShooterHealth = document.querySelector('.b-shooter__health');
var bShooterTitle = document.querySelector('.b-shooter__game-over-title');
var bShooterGameOver = document.querySelector('.b-shooter__game-over');
//Анимация в момент поподания
var animation = `opacity: 0;
                transition-duration: ${delayToReset * 0.6}ms;
                transition-delay: ${delayToReset * 0.4}ms;`;

bShooter.addEventListener('click', function(e){
     var x = e.offsetX - bShooterAim.offsetWidth / 2;
     var y = e.offsetY - bShooterAim.offsetHeight / 2;
     var limitX = bShooter.offsetWidth - bShooterAim.offsetWidth;
     var limitY = bShooter.offsetHeight - bShooterAim.offsetHeight;

     if(ghost.style.animationPlayState === 'paused' || isGameOver){
         return;
     }

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

document.body.addEventListener('keydown', function(e){
    e.preventDefault();

    if(e.keyCode === 32){
        bShooterImgAim.style.transform ='scale(.9)';
    }
    
});

document.body.addEventListener('keyup', function(e){
    e.preventDefault();

    if((e.keyCode === 13) && isGameOver){
        reset();    
    };

    if (e.keyCode !== 32) {
        return;
    }else{
        if (isGameOver) {
            return;
        };

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
            ghost.style.animationPlayState = 'paused';
            //Функция markProgress будет добавлять класс-модификатор на один из элементов массива.
            markProgress(); 

            // после запуска анимации Удаляем все стили после регистрации setTimeout время отложенного запуска которого будет равняться delayToReset 
            setTimeout(function(){
                if(isGameOver){
                    dropTheCurtain(true);
                }else{
                    bShooterImgFire.removeAttribute('style');
                    ghost.removeAttribute('style');
                    bShooterImgAim.style.display = '';
                    bShooterImgFire.style.visibility = 'hidden';
                    ghost.style.display = 'none';
                }
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

    if (ghost.style.animationPlayState === 'paused' || isGameOver) {
        return;
    };

    if (ghost.style.display === 'none') {
        ghost.style.display = '';
        setRandomCoords();
    } else {
        setRandomCoords();
        markLifeStatus(); 
    };
    
}, 3000);

var markLifeStatus = () => {
    
    if (bShooterHealth.classList.contains('_blinkHealthBar')) {
        isGameOver = true;
        dropTheCurtain(false)
        return;
    };

    for (var i = 0; i < healthIcon.length; i++) {
        console.log(healthIcon);
        if (!healthIcon[i].classList.contains('_minusHealth')) {
            healthIcon[i].classList.add('_minusHealth');

            if (i === healthIcon.length - 1) {
                bShooterHealth.classList.add('_blinkHealthBar');
            };

            break;
        };
    };
    console.log('after',healthIcon);
};

// markProgress, функция которая будет фиксировать факт попадания по призраку на прогрессбаре путём перебора найденных .b-shooter__progress-icon и добавления класса, изменяющего внешний вид иконки.
var markProgress = () => {
    for(var i = 0; i < progressIcon.length; i++ ){
        if(!progressIcon[i].classList.contains('_shootToGhost')){
            progressIcon[i].classList.add('_shootToGhost');

            //Когда класс модификатор будет повешен на последнюю иконку, необходимо перевести эту переменную в значение true.
            if(i === progressIcon.length - 1){
                isGameOver = true;
                console.log(isGameOver)
            };

            break;
        };
    };
};

var dropTheCurtain = (isWin) => {
    if (isWin) {
        bShooterTitle.innerText = 'YOU WIN';
        bShooter.classList.add('_win')
    };

    if (!isWin) {
        bShooterTitle.innerText = 'YOU LOSE';
        bShooter.classList.add('_lose');
        ghost.removeAttribute('style'); 
    };
};

var reset = () => {
    isGameOver = false;
    bShooterHealth.classList.remove('_blinkHealthBar');
    bShooter.classList.remove('_lose');
    bShooter.classList.remove('_win');
    bShooterImgAim.removeAttribute('style');
    bShooterImgFire.removeAttribute('style');
    bShooterImgFire.style.visibility = 'hidden';
    ghost.removeAttribute('style');
    ghost.style.display = 'none';

    for (var i = 0; i < progressIcon.length; i++) {
        if (progressIcon[i].classList.contains('_shootToGhost')) {
            progressIcon[i].classList.remove('_shootToGhost');
        };
    };

    for (var i = 0; i < healthIcon.length; i++) {
        if (healthIcon[i].classList.contains('_minusHealth')) {
            healthIcon[i].classList.remove('_minusHealth');
        };
    };
}


