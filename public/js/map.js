
let cordinate=[

         {
        name:"sachin tendulkar",
        country:"india",

        lat:19.0760,
        lon:72.8777 
      },
         {
        name:"ricky ponting",
        country:"australia",

        lat:-42.8821,
        lon:147.3272
      } ,
        {
        name:"Brian lara",
        country:"West Indies",

        lat:10.6918,
        lon:-61.2225
      },
      {
        name:"Ms Dhoni",
        country:"india",

        lat: 23.344315,
        lon:85.296013
      },
      {
        name:"virat kohli",
        country:"india",

        lat:28.644800,
        lon:77.216721
      },
      {
        name:"sir don bradman",
        country:"australia",

        lat:34.6387,
        lon:148.0241
      },
      {
        name:"Jackques Kalis",
        country:"south africa",

        lat:30.5595,
        lon: 22.9375
      },
      {
        name:"Shane Warne",
        country:"Australia",

        lat:	-37.840935,
        lon:144.9631
      },
      {
        name:"Murlitharan",
        country:"Sri Lanka",

        lat:7.291418,
        lon:80.636696,
      },
      {
        name:"Wasim Akram",
        country:"Pakistan",

        lat:31.582045,
        lon:74.329376,
      }
]


let map;

function initMap() {

    map = L.map('#player-map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    updateMap();
}

function updateMap() {
    if (map) {
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        cordinate.forEach(player => {
            L.marker([player.lat, player.lon])
                .addTo(map)
                .bindPopup(`<b>${player.name}</b><br>${player.country}`);
        });
    }
}

initMap()