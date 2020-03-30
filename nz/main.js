// Infos aus html abrufen

let map = document.querySelector("#map");
let lat = map.dataset.lat;
let lng = map.dataset.lng;
let markerTitle = map.dataset.title;

// Darstellung der Karte

var mymap = L.map('map').setView([lat, lng], 13);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>tributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https:/ntopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);

// Marker einfügen

let marker = L.marker([lat, lng]).addTo(mymap);

marker.bindPopup(markerTitle).openPopup();