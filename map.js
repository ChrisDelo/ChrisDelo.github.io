$(document).ready(function(){
	//vars:
	var lat = 0; 
	var lon = 0;
	var size = 0;
	var date = 0;


	$("#lat").keyup(function(){
		 lat = $("#lat").val();
		 console.log("lat:"+lat);
	})
	$("#lon").keyup(function(){
		 lon = $("#lon").val();
		 console.log("lon:"+lon);
	})
	$("#size").keyup(function(){
		 size = $("#size").val();
		 console.log("size:"+size);
	})
	$("#date").keyup(function(){
		 date = $("#date").val();
		 console.log("date:"+date);
	})
	var url = "https://api.nasa.gov/planetary/earth/imagery?lon=&lat=&date=&cloud_score=True&api_key=DEMO_KEY" //add stuff
})
