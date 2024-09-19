


gsap.from("#page1 nav",{

    y:-100, duration: 1, ease: "power2.out" 

})


gsap.from("#page1 #pg1-hero",{

    y:100, duration: 1, ease: "power2.out" 

})


gsap.from("#page2 .logo-card",{

    y:100, duration: 1, ease: "power2.in", 

})

gsap.from("#page3 #pg3-titles",{

    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.from("#pg3-hero #pg3-cards", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#pg3-hero",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});


gsap.from("#page4 #pg4-title", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page4",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});


gsap.from("#page4 #pg4-hero", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 2,
    scrollTrigger: {
        trigger: "#pg4-hero",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});



let cordinate=[
    {
        name:"virat kohli",
        country:"india",
        lat:28.644800,
        lon:77.216721
      },
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

        lat:28.644800,
        lon:77.216721
      },
      {
        name:"Wasim Akram",
        country:"Pakistan",

        lat:28.644800,
        lon:77.216721
      }
]


let map;

function initMap() {
    map = L.map('player-map').setView([0, 0], 2);
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