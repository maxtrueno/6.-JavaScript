//Crea un archivo JS que contenga las siguientes líneas

// Una cadena de texto con tu Nombre
var nombre = "miguel";
// Otra cadena de texto con tu Apellido
var apellido ="jurado";
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
var estudiante = ` ${nombre} ${apellido}`;
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
var estudianteMayus = estudiante.toUpperCase();
// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
var estudianteMinus = estudiante.toLowerCase();
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var contar = estudiante.length
// Una variable que contenga la primera letra del Nombre
var primera = nombre.substring(1,0);
// Otra variable que contenga la última letra del Apellido
var ultima = apellido.substring(apellido.length-1);
// Una cadena de texto que elimine los espacios de la variable "estudiante"
var espacios = estudiante.replace(/ /g,"");
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
var booleana = estudiante.includes(nombre);
