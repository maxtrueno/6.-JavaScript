//Crea un archivo JS que contenga las siguientes líneas


// Una variable que contenga la lista de la compra (mínimo 5 elementos)
var lista_compra = ["pan", "leche", "huevos", "arroz", "pasta"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compra.push("Aceite de Girasol");

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compra.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const odisea ={
    titulo: "2001: Odisea en el espacio",
    director: "Stanley Kubrick",
    año_estreno: 1968};
const padrino ={
    titulo: "El padrino",
    director: "Francis Ford Coppola",
    año_estreno: 1972
}
const padrino_2 ={
    titulo: "El padrino II",
    director: "Francis Ford Coppola",
    año_estreno: 1974
}
var pelis = [odisea,padrino,padrino_2];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
var pelis_2010 = pelis.filter(p2010 => p2010.año_estreno<2010);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
var directores = pelis.map(dire => dire.director);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
var titulos = pelis.map(tit => tit.titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
var lista1 = directores.concat(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
var lista2 = [...directores, ...titulos];
