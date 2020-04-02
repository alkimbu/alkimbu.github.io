let startLayer = L.tileLayer.provider("OpenTopoMap");
let map = L.map("map", {
    center: [0,0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

L.control.layers({
    "OpenTopoMap" : startLayer,
    "OpenStreetMap.Mapnik" : L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Stamen.Watercolor" :  L.tileLayer.provider("Stamen.Watercolor"),
    "Stamen.TerrainBackground" :  L.tileLayer.provider("Stamen.TerrainBackground"),
    "Esri.WorldImagery" :  L.tileLayer.provider("Esri.WorldImagery"),


}).addTo(map)



for (let i = 1; i < CONFIRMED.length; i++) {
    let row = CONFIRMED[i];
    // console.log(row[2], row[3]);
    let val = row[row.length-1];
    let mrk = L.marker([row[2], row[3]]).addTo(map);
    mrk.bindPopup(`${row[0]} ${row[1]}: ${val}`)
}