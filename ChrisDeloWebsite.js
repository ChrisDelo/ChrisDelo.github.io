$(document).ready(function(){
	var nasaAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&camera=fhaz&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ"; 

	var solNumber = 0;
	var camera = ""; 
	var data;
	var solOnlyNasaAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&camera=fhaz&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ"; 

	$("#sol").keyup(function(){
		 solNumber = $("#sol").val();
		 console.log("imputed sol:"+solNumber);
		 	//going to put in an alert if the data type is not an int
	})

	$("#camera").keyup(function(){
		camera = $("#camera").val();
		console.log("camera:"+camera);
	})
	// $("#submitSolNumber").click(function(){
	// 	  console.log(solNumber);
	// 	 nasaAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+solNumber+"&camera=fhaz&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ";
	// 	 console.log("nasa api: "+nasaAPI);

	// });
		// $("#resetSolNumber").click(function(){
		// 	solNumber = 0;
		// 	 $("#test").html("imputed sol: "+solNumber);
		// 	 console.log("sol number: "+solNumber)
		// 	});

	$("#submitCamera").click(function(){
		$("#finalinfo").html(camera);
		console.log(camera);
		nasaAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+solNumber+"&camera="+camera+"&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ";
		console.log("nasa api:"+nasaAPI);

	})
		// $("#resetCamera").click(function(){
		// 	camera = "";
		// 	$("#test").html("imputed camera: "+camera);
		// 	 console.log("camera: "+camera)
		
	$("#clearPics").click(function(){
		$('#pics').html("");
		$('#bigPic').html("");
	})
	$("#getData").click(function(){
		$.getJSON(nasaAPI, function(data){
        		console.dir(data);  //idk if this works
        		data = data;
        		var j = data.photos.length;
        		if (j==0) {
        			$("#pics").html("Rover did not take pictures with "+camera+" camera on sol "+solNumber+". Please pick a different sol or camera.")
        		}
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
				//start of just sol
	var solOnlyNasaAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&camera=fhaz&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ"; 
	var onlySol =0;
	$("#justSol").keyup(function(){
		 onlySol = $("#justSol").val();
		 console.log("imputed sol only:"+onlySol);
	});

		$("#sol").keyup(function(){
			 solNumber = $("#sol").val();
			 console.log("imputed sol:"+solNumber);
			 	//going to put in an alert if the data type is not an int

		})
		$('#submitJustSol').click(function(){
			console.log("only sol:"+onlySol);
			var solOnlyNasaAPI="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ";
		});
		var urlArray = ["https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=FHAZ&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
					"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=RHAZ&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
					"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MAST&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
					"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=CHEMCAM&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
					"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MAHLI&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
					"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MARDI&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
					"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=NAVCAM&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ"];
		
		var cams = ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam"];
		if(urlArray.length ==cams.length){
			console.log("url and cams length is good");
		}  
		else{
			console.log("url and cams length is bad")
		}
		var buttons = []
		for(var i = 0; i < urlArray.length; i++){
			console.log(cams)
			$("#cameraURL").append("<button id='"+cams[i]+"1'>"+cams[i]+"</button>");
			buttons.push($('#'+cams[i]+'1'))
			console.log('helloworld');
			console.log(urlArray[i])
		}

		setAllButtonClicks(buttons, urlArray);

		// $('#'+cams[0]+'1').click(function(){
		// 	console.log(this);
		// 	$.getJSON(urlArray[0], function(data){
  //   			// console.dir(data);  //idk if this works
  //   			data = data;
  //   			var j = data.photos.length;
	 //    		if (j==0) {
	 //    			$("#pics").html("Rover did not take pictures with"+cams[0]+"camera on sol "+onlySol+". Please pick a different sol.")
	 //    		}
  //       		else {
		//        		for(var i=0; i<data.photos.length; i++){
		//        			console.log(data.photos[i]);
		//        			if(i==0){
		//        				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		//        			}

		//        			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		// 	       		}
		//        		$('.smallpics').each(function(index){
		// 				$(this).click(function(){
		// 					$('#bigPic').html("<div><button><img src="+this.src+"></button>");
		// 				})
		//        		});
	 //       		}
		// 	});
		// });

		function setAllButtonClicks(buttonArr, urlArr){
			console.log('boo');
			console.log(buttonArr, urlArr)
			onlySol = 123;
			var urlArray = ["https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=FHAZ&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=RHAZ&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MAST&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=CHEMCAM&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MAHLI&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MARDI&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ",
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=NAVCAM&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ"];
			// for(var e = 0; e < buttonArr.length; e++){
			// 	console.log(urlArray[e])
			// 	buttonArr[e].click(function(){
			// 		$.getJSON(urlArray[e], function(data){
		 //     		 console.dir(data);  //idk if this works
			// 			console.log(data)
		 //    		 	data = data;
		 //    		 	var j = data.photos.length;
			//     		if (j==0) {
			//     	 		$("#pics").html("Rover did not take pictures with"+cams[e]+"camera on sol "+onlySol+". Please pick a different sol.")
			//     	 	}
		 //        		else {
			// 	       		for(var i=0; i<data.photos.length; i++){
			// 	       			console.log(data.photos[i]);
			// 	       			if(i==0){
			// 	       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
			// 	       			}

			// 	       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
			// 		       		}
			// 	       		$('.smallpics').each(function(index){
			// 					$(this).click(function(){
			// 						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
			// 					})
			// 	       		});
			//        		}
			// 		});
			// 	})
			// }
			var buttArr = buttonArr;
			var urlArr = urlArr;
			console.log(buttArr, urlArr);
			for (var e =  0; e < buttArr.length; i++){
				$('#'+cams[e]+'1').click(function(){
					console.log(this);
					
				});
			}
		}

	
		console.log(urlArray[1]);
		$("#fhaz1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=FHAZ&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		console.log("fhaz");
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        		 	$("#pics").html("Rover did not take pictures with fhaz camera on sol "+onlySol+". Please pick a different sol.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
		
		$("#rhaz1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=RHAZ&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		console.log("rhaz")
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        		 	$("#pics").html("Rover did not take pictures with rhaz camera on sol "+onlySol+". Please pick a different sol.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
	
		$("#mast1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MAST&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		console.log("mast")
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        			$("#pics").html("Rover did not take pictures with mast camera on sol "+onlySol+". Please pick a different sol.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
		
		$("#chemcam1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=CHEMCAM&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        		 	$("#pics").html("Rover did not take pictures with chemcam camera on sol "+onlySol+". Please pick a different sol.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
	
		$("#mahli1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MAHLI&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        		 	$("#pics").html("Rover did not take pictures with mahli camera on sol "+onlySol+". Please pick a different sol or camera.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
		
		$("#mardi1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=MARDI&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        		 	$("#pics").html("Rover did not take pictures with mardi camera on sol "+onlySol+". Please pick a different sol.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
	
		$("#navcam1").click(function(){
			$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+onlySol+"&camera=NAVCAM&api_key=lVCrmISPpppZ2vtFgZAgrRfotnPrNmncgCfN01jQ", function(data){
        		console.dir(data);  //idk if this works
        		data = data;
        		var j = data.photos.length;
        		 if (j==0) {
        		 	$("#pics").html("Rover did not take pictures with navcam camera on sol "+onlySol+". Please pick a different sol or camera.")
        		 }
        		else {
		       		for(var i=0; i<data.photos.length; i++){
		       			console.log(data.photos[i]);
		       			if(i==0){
		       				$('#bigPic').html("<div><button class='imgs'><img src="+data.photos[i].img_src+"></button><p>"+data.photos[i].earth_date+"</p></div>");
		       			}

		       			$('#pics').append("<div><button class='imgs'><img class='smallpics'src="+data.photos[i].img_src+" height=150px></button><p>"+data.photos[i].earth_date+"</p></div>");
		       		}
	       		$('.smallpics').each(function(index){
					$(this).click(function(){
						$('#bigPic').html("<div><button><img src="+this.src+"></button>");
					})
	       		})
	       	}
    	});
	});
});


		
