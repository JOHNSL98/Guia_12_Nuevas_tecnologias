var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.5293101, lng: -5.6773233},
        zoom: 13
    });
    
    var marker = new google.maps.Marker({
        position: {lat: 4.642308, lng: -74.054125},
        map: map,
        title: 'Universidad Manuela Beltran'
    });
}




// Register Service Worker

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}