$(document).ready(function() {

	var container = $( '#container' );

	var otherObjects = $( '.other-objects' );

	function parseWeather( weather ) {

		console.log( weather );

		var temp = weather.main.temp;
		var mainCondition =  weather.weather[0].main;
		var mainWeatherId = weather.weather[0].id;
		var mainDescription = weather.weather[0].description;

		console.log( mainCondition );
		console.log( mainDescription );
		console.log( mainWeatherId );


		if ( mainWeatherId >= 300 && mainWeatherId <= 302 || mainWeatherId == 310 || mainWeatherId == 230 || mainWeatherId == 231) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#chumpChange, #chumpChange2, #chumpChange3, #chumpChange4, #chumpChange5, #chumpChange6' ).show();

		} 


		else if ( mainWeatherId == 311 || mainWeatherId == 312 || mainWeatherId == 321 || mainWeatherId == 232) {

			container.html('<p>Makin\' it '+mainDescription+'</p>')

			$( '#oneDolla, #oneDolla2, oneDollaFlip, oneDollaFlip2, oneDollaVert, oneDollaVert2' ).show();
		
		} 

		else if ( mainWeatherId == 500 || mainWeatherId == 501 || mainWeatherId == 200) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#tenDolla, #tenDollaFlip, #tenDollaVert, #tenDolla2, #tenDollaFlip2, #tenDollaVert2' ).show();

		}

		else if ( mainWeatherId >= 520 && mainWeatherId <= 522 || mainWeatherId == 201) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#fiftyDolla' ).show();
			$( '#fiftyDollaFlip' ).show();
			$( '#fiftyDollaVert' ).show();
			$( '#fiftyDolla2' ).show();
			$( '#fiftyDollaFlip2' ).show();
			$( '#fiftyDollaVert2' ).show();

		} 

		else if ( mainWeatherId >= 502 && mainWeatherId <= 504 ||mainWeatherId == 202) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#oneHundredDolla' ).show();
			$( '#oneHundredDollaFlip' ).show();
			$( '#oneHundredDollaVert' ).show();
			$( '#oneHundredDolla2' ).show();
			$( '#oneHundredDollaFlip2' ).show();
			$( '#oneHundredDollaVert2' ).show();

		} 

		else if ( mainWeatherId == 611 || mainWeatherId == 906) {

			container.html('<p>Makin\' it '+mainDescription+'</p>');

			$( '#diamond' ).show();
			$( '#diamond2' ).show();
			$( '#diamond3' ).show();
			$( '#diamond4' ).show();
			$( '#diamond5' ).show();
			$( '#diamond6' ).show();

		} 

		else {
			$('#emptyWallet').show();
			$('#container2').show();
		}

		if ( mainCondition == "thunderstorm") {

			$( 'body' ).addClass('pulsing-animation');
		};

		$( 'p' ).fadeIn('slow', function(){ 
			console.log("hi we're done!")
		});
		

	};

	
	$.ajax({

		url : "http://api.openweathermap.org/data/2.5/weather?zip=10009,us&units=imperial&appid=cd934a25c15183ae5f462460856cd3d2",
		dataType : "jsonp",

		success : function( weatherData ) {

			parseWeather( weatherData );

		},

		error : function() {

			console.log('Something went wrong with your request :(  Check that you\'re using the correct API key (your App ID)');

		}

	});

});