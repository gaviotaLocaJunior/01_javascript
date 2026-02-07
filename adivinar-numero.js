let numeroSecreto = Math.floor(Math.random()*100 + 1);
let intentos = 0;
let adivinado = false;

console.log("Bienvenido");
console.log("He pensado un numero entre 1 y 100");
while (!adivinado){
    let intento = prompt("Que numero crees que es? ")
    intento = Number(intento);
    intentos++;
    
    // comparar el numero intento con numero secreto
    if (intento === numeroSecreto) {
        console.log("Felicitamos! " + intentos + " " + numeroSecreto);
        adivinado = true;
    } else if (intento < numeroSecreto) {
        console.log("Muy bajo... ");
    } else {
        console.log("Muy alto");
    }
}
