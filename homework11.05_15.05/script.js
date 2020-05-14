var bUnivers = document.querySelector('.b-univers');
var bUniversPlanet = document.querySelector('.b-univers__img');

bUnivers.addEventListener('click', function(e) {
  
    var x = e.offsetX - bUniversPlanet.offsetWidth / 2;
    var y = e.offsetY - bUniversPlanet.offsetHeight / 2;
    
    if (e.target === bUniversPlanet ) {
        return bUniversPlanet.style.display = 'none';
    } else if (bUniversPlanet.style.display === 'none'){
        return bUniversPlanet.style.display = '';   
    }

    bUniversPlanet.style.transform = 'translate(' + x + 'px, ' + y + 'px)';


});

