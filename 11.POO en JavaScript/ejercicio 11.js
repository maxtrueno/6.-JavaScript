class Estudiante {
	constructor(nombre) {
		this.nombre = nombre;
		this.asignaturas = ['Javascript', 'Html', 'Css'];
	}
	obtenDatos() {
		return `${this.nombre},  ${this.asignaturas}`;
	}
}
const estudiante1 = new Estudiante('Miguel Ángel');

console.log(estudiante1.obtenDatos());