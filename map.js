function initMap() {
  // The location of umssn
  var umssn = { lat: 0.3868894580284336, lng: 32.65033330000001 };
  // The map, centered at Umssn
   var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: umssn,
  });
  // The marker, positioned at umssn
  var marker = new google.maps.Marker({
    position: umssn,
    map: map,
  });
}
