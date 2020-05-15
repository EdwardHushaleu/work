var bUnivers = document.querySelector('.b-univers');
var bUniversPlanet = document.querySelector('.b-univers__img');

bUnivers.addEventListener('click', function(e) {
    var x = e.offsetX - bUniversPlanet.offsetWidth / 2;
    var y = e.offsetY - bUniversPlanet.offsetHeight / 2;
   
    if (e.target === bUniversPlanet ) {
        return bUniversPlanet.style.display = 'none';
    } else if (bUniversPlanet.style.display === 'none'){
        return bUniversPlanet.style.display = '';   
    };

    if (x < 0) {
        x = 0; 
    };

    if (x + bUniversPlanet.offsetWidth > bUnivers.offsetWidth) {
        x = bUnivers.offsetWidth - bUniversPlanet.offsetWidth;  
    };

    if (y < 0) {
        y = 0;
    };

    if (y + bUniversPlanet.offsetHeight > bUnivers.offsetHeight) {
        y = bUnivers.offsetHeight - bUniversPlanet.offsetHeight;
    };
    
    bUniversPlanet.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

});

