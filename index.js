window.addEventListener('load', () => {
  initMap();
  registerSW();
});

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

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('js/service-worker.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}