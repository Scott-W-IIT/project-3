      var map;
        function initMap() {
        var myLatLng = {lat: 41.8615, lng: -87.6136};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'The Balbo Monument'
        });
      }
