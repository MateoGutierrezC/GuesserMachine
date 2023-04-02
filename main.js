let num = document.getElementById('numAdiv');
let numMaquina = Math.floor(Math.random()*100);
let max = 100;
let min = 1;
let vidas = 10;


document.getElementById('boton').addEventListener('click', function() {  

let numU = parseInt(num.value);

    if (numU < 1 || numU > 100) {
        alert('Ingresa un numero valido entre 1 y 100');
        return;
    }

while (numU !== numMaquina && vidas > 0) {

    let respuesta = confirm(   'Tu numero es: ' + numMaquina + ' ?');

        if(numU > numMaquina){
            min = numMaquina
        }

        if (numU < numMaquina) {
            max = numMaquina
        }
            numMaquina = Math.floor((Math.random()*(max - min)) +min);
            vidas--;
             console.log(vidas + '-' + numMaquina + " mynumber " + numU)
        
        if ( numU === numMaquina) {
        alert('🎉¡La maquina adivinó tu número! 🎉 Tu numero era  ' + numU + '  🤣' );
        }else if(vidas < 1){
        alert('La maquina no tiene mas intentos')
        }
        
        
    }
});
