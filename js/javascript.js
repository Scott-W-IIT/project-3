//Map Script
//basic stuff
function myMap() {
  var myLatLng = { lat: 41.8615, lng: -87.6136 };

  var map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 17,
    center: myLatLng,
    styles: mapstyle
  });
//begin marker script
  var marker = new google.maps.Marker({
    position: myLatLng
  });

  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
    content: "The Balbo Monument"
  });

  infowindow.open(map, marker);

  google.maps.event.addListener(marker, "click", function() {
    var pos = map.getZoom();
    map.setZoom(11);
    map.setCenter(marker.getPosition());
    window.setTimeout(function() {
      map.setZoom(pos);
    }, 2000);
  });
//bounce effect
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  marker.addListener("click", toggleBounce);
}
//style the map
const mapstyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1a3646"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#64779e"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878"
      }
    ]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#334e87"
      }
    ]
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#023e58"
      }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#283d6a"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6f9ba5"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#023e58"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#304a7d"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c6675"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#255763"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b0d5ce"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#023e58"
      }
    ]
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#283d6a"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#3a4762"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#0e1626"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70"
      }
    ]
  }
];

//Begin Popup script
function popoutFunction() {
  alert("The Balbo Monument was a gift to Chicago from fascist dictator Benito Mussolini, erected in 1934 to commemorate a celebrated trans-Atlantic flight of 24 11-ton seaplanes from Rome to Chicago. The namesake of the monument comes from the leader of that voyage, General Italo Balbo, an Italian aviator who had been central to the Mussolini regime and later became one of his most feared warlords. Not long after his visit to Chicago, Balbo led the bombing of unarmed Africans in Ethiopia. As fascism spread across Europe in the 1930s, his tactics were celebrated in speeches by no less than Hitler.Should you lean in, the faded inscription at the base to the Balbo monument is chilling. It reads, in part: Fascist Italy with the sponsorship of Benito Mussolini presents to Chicago this commemoration of a flight by Balbo in the 11th year of the Fascist Era.");
};


//Begin Slider. used the one from https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/
window.onload = function() {
  var controls = document.querySelectorAll(".controls");
  for (var i = 0; i < controls.length; i++) {
    controls[i].style.display = "inline-block";
  }

  var slides = document.querySelectorAll("#slides .slide");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = "slide showing";
  }

  var playing = true;
  var pauseButton = document.getElementById("pause");

  function pauseSlideshow() {
    pauseButton.innerHTML = "&#9658;"; // play character
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow() {
    pauseButton.innerHTML = "&#10074;&#10074;"; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
  }

  pauseButton.onclick = function() {
    if (playing) {
      pauseSlideshow();
    } else {
      playSlideshow();
    }
  };

  var next = document.getElementById("next");
  var previous = document.getElementById("previous");

  next.onclick = function() {
    pauseSlideshow();
    nextSlide();
  };
  previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
  };
};
