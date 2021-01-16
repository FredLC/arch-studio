var map = L.map("map").setView([36.1686, -86.785], 14);

var circle = L.circle([36.1686, -86.785], {
  color: "black",
  fillColor: "#1b1d23",
  fillOpacity: 0.5,
  radius: 200,
}).addTo(map);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Gp2PtxSXytV7THSRn4Vw",
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution:
      '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    crossOrigin: true,
  }
).addTo(map);

var goToCity = function (city) {
  if (city == "nashville") {
    map.setView(new L.LatLng(36.1686, -86.785), 14);
    circle = L.circle([36.1686, -86.785], {
      color: "black",
      fillColor: "#1b1d23",
      fillOpacity: 0.5,
      radius: 200,
    }).addTo(map);
  }
  if (city == "austin") {
    map.setView(new L.LatLng(30.2767128, -97.7661567), 14);
    circle = L.circle([30.2767128, -97.7661567], {
      color: "black",
      fillColor: "#1b1d23",
      fillOpacity: 0.5,
      radius: 200,
    }).addTo(map);
  }
  return;
};
