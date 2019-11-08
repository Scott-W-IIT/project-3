      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 1, lng: -40},
          zoom: 10
        });
      }