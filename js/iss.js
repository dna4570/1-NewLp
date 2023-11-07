'use strict'

// axios
//   .get('http://api.open-notify.org/iss-now.json')
//   .then(response => {
//     console.log(response.data);
//   });


// 地図を定義
const map = L.map('map').setView([0, 0], 2);
// 地図に配置するピン(アイコン)を定義
const icon = L.icon({
  iconUrl: 'images/iss_pin.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});
// 地図上のサークルスタイルを定義
const circle_style = {
  color: '#c22',
  opacity: .3,
  weight: 1,
  fillColor: '#c22',
  fillOpacity: .1,
};
// 地図上にピン(アイコン)を描画
const iss = L.marker([0, 0], { icon }).addTo(map);
// 地図上にサークルを描画
const isscirc = L.circle([0,0], 2200e3, circle_style).addTo(map);
// 地図を描画
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
  maxZoom: 4,
}).addTo(map);
function moveISS () {
  axios
    .get('http://api.open-notify.org/iss-now.json')
    .then(response => {
      const lat = response.data.iss_position.latitude;
      const lon = response.data.iss_position.longitude;
      iss.setLatLng([lat, lon]);
      isscirc.setLatLng([lat, lon]);
      map.panTo([lat, lon], animate=true);
    });
  setTimeout(moveISS, 5000);
}
moveISS();
