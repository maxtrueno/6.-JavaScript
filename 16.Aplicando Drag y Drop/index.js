const parrafo = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.section');

parrafo.forEach((parrafo) => {
	parrafo.addEventListener('dragstart', (event) => {
		console.log('Inicio del arrastre');

		parrafo.classList.add('dragging');
		event.dataTransfer.setData('id', parrafo.id);
	});
	parrafo.addEventListener('dragend', () => {
		console.log('Fin del arrastre');
		parrafo.classList.remove('dragging');
	});
});

secciones.forEach((seccion) => {
	seccion.addEventListener('dragover', (event) => {
		event.preventDefault();
	});

	seccion.addEventListener('drop', (event) => {
		const id_parrafo = event.dataTransfer.getData('id');

		const parrafo = document.getElementById(id_parrafo);
		seccion.appendChild(parrafo);
	});
});

const eliminarParrafo = document.querySelector('.eliminar');

eliminarParrafo.addEventListener('dragover', (event) => {
	event.preventDefault();
});

eliminarParrafo.addEventListener('drop', (event) => {
	const id_parrafo = event.dataTransfer.getData('id');
	const parrafo = document.getElementById(id_parrafo);
	parrafo.remove(id_parrafo);
});
