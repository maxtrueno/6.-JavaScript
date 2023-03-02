function initMap() {
	const posicion1 = {
		lat: 37.386304,
		lng: -6.002438,
	};
	const posicion2 = {
		lat: 48.858589,
		lng: 2.294170,
	};
	const posicion3 = {
		lat: 50.846592, 
		lng: 4.352739,
	};

	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: posicion1,
	});
	const marker = new google.maps.Marker({
		position: posicion1,
		map,
		title: 'Favorito 1',
	});
	const marker2 = new google.maps.Marker({
		position: posicion2,
		map,
		title: 'Favorito 2',
	});
	const marker3 = new google.maps.Marker({
		position: posicion3,
		map,
		title: 'Favorito 3',
	});
}