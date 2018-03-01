function initMap() {
	// Create center marker at UCSD
    var ucsd_ltlng = {lat:32.87882, lng:-117.23593};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: ucsd_ltlng,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        position: ucsd_ltlng,
        map: map,
        title: "UCSD"
    });
}