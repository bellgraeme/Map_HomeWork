var MapWrapper = function(container, coords, zoom){
  
   this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    mapTypeId: 'satellite'
  })

}

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  },
  addClickEvent: function(){
    var coords = {lat:null, lng:null}
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      // var coords = {lat:event.latLng.lat(), lng:event.latLng.lng()} 
      this.addMarker(event.latLng) 
    }.bind(this));
    
  }
  55.577431, -1.248767BR
  59.607491, -8.015993TL

}