
var nombre = "Miguel";
var apellido = "Ángel";

const yo = {
    nombre:"Miguel",
    apellido:"Ángel"
};

sessionStorage.setItem('midatos', JSON.stringify(yo));

localStorage.setItem('midatos', JSON.stringify(yo));

document.cookie = `caduca=${JSON.stringify(yo)};max-age=${60 * 60}`;