$(document).ready(function(){
	//vars:
	var lat = 0; 
	var lon = 0;
	var size = 0;
	var date = 0;
	var url = "";


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
	
	console.log(url);
	$("#submit").click(function(){
		url = "https://api.nasa.gov/planetary/earth/imagery?lon="+lon+"&lat="+lat+"&dim="+size+"&date="+date+"&cloud_score=True&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ" //add stuff
		console.log("url:"+url)
		$.getJSON("https://api.nasa.gov/planetary/earth/imagery?lon="+lon+"&lat="+lat+"&dim="+size+"&date="+date+"&cloud_score=True&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
		console.log("data:"+data.length)
		})

	})
})
