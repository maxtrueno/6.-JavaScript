//Una función sin parámetros que devuelva siempre "true"
function verdad() {
    return "true"
}

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);

//Una función generadora de índices pares automáticos
function* generador() {
    let id = 0;
    while(true) {
        id++
        yield id*2
    }
}

const gen = generador();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)