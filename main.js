let lat = -44.046667;
let lng = 170.166667;
let Zoom = 19

let map = L.map('map').setView([lat, lng], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: Zoom,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>Lake Pukaki</b><p>Neuseeland</p>").openPopup();

