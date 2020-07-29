const body = document.body
const bShooter = document.querySelector('.b-shooter');
const bShooterAim = document.querySelector('.b-shooter__aim');
const bShooterImgAim = document.querySelector('.b-shooter__img-aim');
const ghost = document.querySelector('.b-shooter__img-ghost');
const bShooterImgFire = document.querySelector('.b-shooter__img-fire');
const delayToReset = 500;
const progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
let isGameOver = false;
const healthIcon = document.querySelectorAll('.b-shooter__health-icon');
const bShooterHealth = document.querySelector('.b-shooter__health');
const bShooterTitle = document.querySelector('.b-shooter__game-over-title');
const bShooterGameOver = document.querySelector('.b-shooter__game-over');
//Анимация в момент поподания
const animation = `opacity: 0;
                transition-duration: ${delayToReset * 0.6}ms;
                transition-delay: ${delayToReset * 0.4}ms;`;

bShooter.addEventListener('click', (e) => {
    if(ghost.style.animationPlayState === 'paused' || isGameOver){
        return;
    }

    const x = e.offsetX - bShooterAim.offsetWidth / 2;
    const y = e.offsetY - bShooterAim.offsetHeight / 2;
    const limitX = bShooter.offsetWidth - bShooterAim.offsetWidth;
    const limitY = bShooter.offsetHeight - bShooterAim.offsetHeight;

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

document.body.addEventListener('keydown', (e) => {

    if(e.keyCode === 32){
        e.preventDefault();
        bShooterImgAim.style.transform ='scale(.9)';
    }
    
});

document.body.addEventListener('keyup', (e) => {

    if((e.keyCode === 13) && isGameOver){
      return reset();    
    }

   else if (e.keyCode !== 32 || isGameOver) {
        return;
    }


        //находим координаты методом getBoundingClientRect() у элемента bShooterImgAim
        const coordShooter = bShooterImgAim.getBoundingClientRect();

        //вычислем полученые координаты, aimCenterX и aimCenterY, которые будут являться центром изображения прицела.
        const aimCenterX = coordShooter.x + coordShooter.width / 2;
        const aimCenterY = coordShooter.y + coordShooter.height / 2;
        
        // с помощю метода getBoundingClientRect() берем значения left, top, right и bottom для Hitbox .
        const coordGhost = ghost.getBoundingClientRect();

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
            setTimeout(() => {
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
        
});

function setRandomCoords(){
    //оперируем размерами игровой области и размерами картинки с приведением                                                 
    const limitX = bShooter.offsetWidth - ghost.offsetWidth;
    const limitY = bShooter.offsetHeight - ghost.offsetHeight;

    //генерируем случайную пару x, y допустимых координат
    const x = Math.floor(Math.random() * (limitX + 1));
    const y = Math.floor(Math.random() * (limitY + 1));

    //полученные координаты задаем как top и left для .b-shooter__img-ghost
    ghost.style.top = y + 'px';
    ghost.style.left = x + 'px';
    
}

//реализовываем расписание появления приведения с помощью setInterval в 3 секунды
setInterval(() => {

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

const markLifeStatus = () => {
    
    if (bShooterHealth.classList.contains('_blinkHealthBar')) {
        isGameOver = true;
        dropTheCurtain(false)
        return;
    };

    for (let i = 0; i < healthIcon.length; i++) {
        if (!healthIcon[i].classList.contains('_minusHealth')) {
            healthIcon[i].classList.add('_minusHealth');

            if (i === healthIcon.length - 1) {
                bShooterHealth.classList.add('_blinkHealthBar');
            };

            break;
        };
    };
};

// markProgress, функция которая будет фиксировать факт попадания по призраку на прогрессбаре путём перебора найденных .b-shooter__progress-icon и добавления класса, изменяющего внешний вид иконки.
const markProgress = () => {
    for(let i = 0; i < progressIcon.length; i++ ){
        if(!progressIcon[i].classList.contains('_shootToGhost')){
            progressIcon[i].classList.add('_shootToGhost');

            //Когда класс модификатор будет повешен на последнюю иконку, необходимо перевести эту переменную в значение true.
            if(i === progressIcon.length - 1){
                isGameOver = true;
            };

            break;
        };
    };
};

const dropTheCurtain = (isWin) => {
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

const reset = () => {
    isGameOver = false;
    bShooterHealth.classList.remove('_blinkHealthBar');
    bShooter.classList.remove('_lose');
    bShooter.classList.remove('_win');
    bShooterImgAim.removeAttribute('style');
    bShooterImgFire.removeAttribute('style');
    bShooterImgFire.style.visibility = 'hidden';
    ghost.removeAttribute('style');
    ghost.style.display = 'none';

    for (let i = 0; i < progressIcon.length; i++) {
        if (progressIcon[i].classList.contains('_shootToGhost')) {
            progressIcon[i].classList.remove('_shootToGhost');
        };
    };

    for (let i = 0; i < healthIcon.length; i++) {
        if (healthIcon[i].classList.contains('_minusHealth')) {
            healthIcon[i].classList.remove('_minusHealth');
        };
    };
}


