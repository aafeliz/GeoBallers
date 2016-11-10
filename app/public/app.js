'use strict';

//create multiple requests of select dates in San Francisco weather
//append the city to the map with mapbox
//append weather gradient-overlays with carto
//learn promises to make multiple ajax requests

$(document).ready(function(){

    var request_one = $.ajax({
        url: "https://api.wunderground.com/api/1c947ca1590e9951/history_20160112/q/CA/San_Francisco.json",
        dataType: 'jsonp'
        
    });
    var request_two = $.ajax({
        url: "https://api.wunderground.com/api/1c947ca1590e9951/history_20060112/q/CA/San_Francisco.json",
        dataType: 'jsonp'
    });
    
    var request_three = $.ajax({
        url: "https://api.wunderground.com/api/1c947ca1590e9951/history_19960112/q/CA/San_Francisco.json",
        dataType: 'jsonp'
    });
	
	$.when(request_one,request_two,request_three).done(function(response_one, response_two, response_three){
	    console.log(response_one, response_two, response_three);
	    //create map
	    (function(){
	       // console.log('the response one is ', response_one);
	        var city_coords = [37.777, -122.419];
	        var api_key = 'pk.eyJ1IjoiamdhcmNlcyIsImEiOiJjaXY4amM0ZHQwMDlqMnlzOWk2MnVocjNzIn0.Pos1M9ZQgxMGnQ_H-bV7dA';
	         L.mapbox.accessToken = api_key;
             var map = L.mapbox.map('map', 'mapbox.streets').setView(city_coords, 9);

	    }());
	    //call carto's api with temperature gradients
	    (function(){
	        console.log('carto response ', response_one);
	    }());
	})
	
	
    
})

