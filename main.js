//Latitud y longitud para abrir el mapa
let latitude = 22.7868542, longitude = 88.3643296;

// Inicializando Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

//Crear el mapa con zoom 4
var map = new mapboxgl.Map({
	container:'map',
	style:'mapbox://styles/mapbox/streets-v11',
	center:[longitude, latitude],
	zoom:4
})

//Agregar el control Geocoder
map.addControl(
	new MapboxGeocoder({
		accessToken:mapboxgl.accessToken,
		mapboxgl:mapboxgl
	})
)

//Variable para elegir la imagen amber desde main.html
var img1 = document.querySelector("#amber")
// Crea un marcador del Fuerte Amber en Jaipur y agrégalo al mapa.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);


//Variable para elegir la imagen gateway desde main.html
var img2 = document.querySelector("#gateway")

// Crea un marcador de la Entrada de la India en Mumbai y agrégalo al mapa.
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.8346, 18.9219])
	.addTo(map);


//Variable para elegir la imagen gate desde main.html
var img3 = document.querySelector("#gate")
// Crea un marcador de la Puerta de la India y agrégalo al mapa.
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.1346, 28.3646])
	.addTo(map);


//Variable para elegir la imagen lotus desde main.html
var img4 = document.querySelector("#lotus")
// Crea un marcador en el Templo del Loto en Delhi y agrégalo al mapa.
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.1531, 28.3312])
	.addTo(map);

//Variable para elegir la imagen victoria desde main.html
var img5 = document.querySelector("#victoria")
//Crea un marcador del Victoria Memorial en Kolkata y agrégalo al mapa.
var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88.2033, 22.3242])
	.addTo(map);


$(document).ready(function () {
	alert("¡Por favor, permite que el dispositivo conozca tu ubicación!")
	initGeolocation();
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Lo sentimos, tu navegador no es compatible con los servicios de geolocalización.");
    }
}

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl:mapboxgl
	}).on(`result`, function(e){
		destination = e.result.center
	})
)

$(function(){
	$("#navigate-button").click(function(){
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

