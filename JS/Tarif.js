var myLatLng = { lat: 43.2589, lng: 5.5646};
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)

var directionsService = new google.maps.DirectionsService();

var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);

function calcRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'> From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ". <br /> Tarif avec la Mercedes Classe E : " + result.routes[0].legs[0].distance.value*2.5/1000 + " €<br />Temps : " + result.routes[0].legs[0].duration.text + ". </div>";

            directionsDisplay.setDirections(result);
            console.log(result);
        }
        else {
            directionsDisplay.setDirections({ routes: []});

            map.setCenter(myLatLng);

            output.innerHTML = "<div class='alert-danger'>Je ne peux pas vous renseigner...</div>";
        }
    });
}

var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

