      var map;
        function initMap() {
        var myLatLng = {lat: 41.8615, lng: -87.6136};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'The Balbo Monument'
        });

        var image = 'images/balbo.jpeg';
        var beachMarker = new google.maps.Marker({
          position: {lat: 41.8615, lng: -87.6136},
          map: map,
          icon: image
        });

map.addListener('center_changed', function() {

          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 2500);
        });

        marker.addListener('click', function() {
          map.setZoom(19);
          map.setCenter(marker.getPosition());
        });


      }
