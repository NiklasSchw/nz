let map = L.map('map').setView([-44.046667, 170.166667], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([-44.046667, 170.166667]).addTo(map);
marker.bindPopup("<b>Lake Pukaki</b><p>Neuseeland</p>").openPopup();

