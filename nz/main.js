let mapdiv = document.querySelector("#map");

let map = L.map("map", {
    center: [
        mapdiv.dataset.lat,
        mapdiv.dataset.lng
    ],
    zoom: 13,
    layers: [
        L.tileLayer.provider("Stamen.Watercolor")
    ]
});

let mrk = L.marker([
    mapdiv.dataset.lat,
    mapdiv.dataset.lng
]).addTo(map);

mrk.bindPopup(mapdiv.dataset.title).openPopup();