var yo = {
    nombre : "Miguel",
    apellido : "Ángel",
    edad : 25,
    altura : 1.85,
    eresDesarrollador : true
}

var calcular_edad = yo.edad;

var lista = [
    yo,
    {
        nombre : "Kiko",
        apellido : "Yo",
        edad : 47,
        altura : 1.85,
        eresDesarrollador : false,
    },
    {
        nombre : "Max",
        apellido : "Adri",
        edad : 27,
        altura : 1.93,
        eresDesarrollador : false
    }
];


var ordenar = lista.sort(function(a, b) {
    return a.edad - b.edad;
})