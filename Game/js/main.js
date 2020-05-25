var body = document.body
var bShooter = document.querySelector('.b-shooter');
var bShooterAim = document.querySelector('.b-shooter__aim');
var bShooterImgAim = document.querySelector('.b-shooter__img-aim');

bShooter.addEventListener('click', function(e){
     var x = e.offsetX - bShooterAim.offsetWidth / 2;
     var y = e.offsetY - bShooterAim.offsetHeight / 2;

    if(x < 0){
        x = 0
    };

    if(x + bShooterAim.offsetWidth > bShooter.offsetWidth){
        x = bShooter.offsetWidth - bShooterAim.offsetWidth;
    };

    if(y < 0){
        y = 0
    };

    if(y + bShooterAim.offsetHeight > bShooter.offsetHeight){
        y = bShooter.offsetHeight - bShooterAim.offsetHeight;
    };

    bShooterAim.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});


body.addEventListener('keydown', function(e){
    
    if(e.keyCode === 13){
        bShooterImgAim.style.transform ='scale(.7)';
    }
});

body.addEventListener('keyup', function(e){
    
    if(e.keyCode === 13){
        bShooterImgAim.style.transform = '';  
    }
    
});
