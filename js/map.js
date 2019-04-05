//map.js
 
//Set up some of our variables.
var map; //Will contain map object.
var marker = false; ////Has the user plotted their location marker? 
        
//Function called to initialize / create the map.
//This is called when the page has loaded.
function initMap() {
 
    //The center location of our map.
    var centerOfMap = new google.maps.LatLng(-37.766,145.352);
	
    //Map options.
    var options = {
      center: centerOfMap, //Set center.
      zoom: 4 //The zoom value.
    };
	

    //Create the map object.
			map = new google.maps.Map(document.getElementById('map'), options);
			marker = new google.maps.Marker({
						position: centerOfMap,
						map: map,
						draggable: true //make it draggable
						});
			markerLocation() ;
    //Listen for any clicks on the map.
    google.maps.event.addListener(map, 'click', function(event) {                
        //Get the location that the user clicked.
        var clickedLocation = event.latLng;
        //If the marker hasn't been added.
		
        if(marker === false){
            //Create the marker.
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
                draggable: true //make it draggable
            });
            //Listen for drag events!
            google.maps.event.addListener(marker, 'dragend', function(event){
                markerLocation();
            });
        } else{
            //Marker has already been added, so just change its location.
            marker.setPosition(clickedLocation);
        }
        //Get the marker's location.
        markerLocation();
    });
}
        
//This function will get the marker's current location and then add the lat/long
//values to our textfields so that we can save the location.
function markerLocation(){
    //Get location.
    var currentLocation = marker.getPosition();
    //Add lat and lng values to a field that we can save.
    document.getElementById('lat').value = currentLocation.lat(); //latitude
    document.getElementById('lng').value = currentLocation.lng(); //longitude
	displayLocation(currentLocation.lat(),currentLocation.lng()) ;
}


function displayLocation(latitude,longitude){
	var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode(
        {'latLng': latlng}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var add= results[0].formatted_address ;
                    var  value=add.split(",");

                    count=value.length;
                    country=value[count-1];
                    state=value[count-2];
                    city=value[count-3];
                   document.getElementById('location').value =  state + ","+ country ;
                }
                else  {
                   // x.innerHTML = "address not found";
                }
            }
            else {
                //x.innerHTML = "Geocoder failed due to: " + status;
            }
        }
    );
   
}    

//Load the map when the page has finished loading.
google.maps.event.addDomListener(window, 'load', initMap);