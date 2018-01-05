var map = L.map('stagemap', {
  center: [54.6990991, -4.154746],
  zoom: 5.3
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiY2hyaXNyZW5ubyIsImEiOiJjajd4aWxsY3c1cnU2MndxbXNyM3JrMzMwIn0.wDL-LVmIMPGNw7rUJj21-Q'
}).addTo(map);

var gpxArray = [
  '../../GPX Files/St Just Salcombe.gpx',
  '../../GPX Files/Salcombe Wareham.gpx',
  '../../GPX Files/Wareham Lewes.gpx',
  '../../GPX Files/Lewes Dartford.gpx',
  '../../GPX Files/Dartford Ferry Lowestoft.gpx',
  '../../GPX Files/Lowestoft Coningsby.gpx',
  '../../GPX Files/Coningsby Eastfield.gpx',
  '../../GPX Files/Eastfield Alnwick.gpx',
  '../../GPX Files/Alnwick Glenrothes.gpx',
  '../../GPX Files/Glenrothes Inverurie.gpx',
  '../../GPX Files/Inverurie Inverness.gpx',
  '../../GPX Files/Inverness Thurso.gpx',
  '../../GPX Files/Thurso Ullapool.gpx',
  '../../GPX Files/Ullapool Mallaig.gpx',
  '../../GPX Files/Mallaig Oban.gpx',
  '../../GPX Files/Oban1 Ayr1.gpx',
  '../../GPX Files/Ayr Dumfries.gpx',
  '../../GPX Files/Dumfries Kendal.gpx',
  '../../GPX Files/Kendal Mold.gpx',
  '../../GPX Files/Mold Bala.gpx',
  '../../GPX Files/Bala Fishguard.gpx',
  '../../GPX Files/Fishguard Newport.gpx',
  '../../GPX Files/Newport Ilfracombe.gpx',
  '../../GPX Files/Ilfracombe St Just.gpx',
];

for (gpx of gpxArray) {

  new L.GPX(gpx, {
    async: true,
    marker_options: {
      startIconUrl: 'pin-icon-start.png',
      endIconUrl:   '',
      shadowUrl:    '',
      wptIconUrls: {
        'wpt': '',
      },
    },
  }).on('loaded', function(e) {
  }).addTo(map);

}

function showRoute(arrayKey) {

  var clickedRoute = gpxArray[arrayKey];
  new L.GPX(clickedRoute, {async: true}).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds(), {padding: [50, 50]});
  }).addTo(map);

}
