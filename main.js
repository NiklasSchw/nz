let lat = -44.046667;
let lng = 170.166667;
let zoom = 11

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
    <h2>Lake Pukaki</h2>
    <ul>
        <li>Breite: ${lat}</li>
        <li>Länge: ${lng}</li>
    </ul>
`).openPopup();

