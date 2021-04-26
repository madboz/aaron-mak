const headerTemp = document.getElementsByClassName("data__temp")[0];
const headerCond = document.getElementsByClassName("data__cond")[0];

function parseWeather(w) {
	const dataTempF = w.main.temp;
	const dataTempC = ((dataTempF - 32) * 5) / 9;
	const dataTemp = Math.round(dataTempC) + "° C / " + Math.round(dataTempF) + "° F";
	const dataCond =  w.weather[0].main;

	headerTemp.innerHTML = dataTemp;
	headerCond.innerHTML = dataCond;
};


$.ajax({
	url : "http://api.openweathermap.org/data/2.5/weather?id=6087456&units=imperial&appid=a474cad0fb5979d443c1231403b64910",
	dataType : "jsonp",
	success : function(w) { 
		parseWeather(w);
	},
	error : function() {
		console.log("weather machine broke");
	}
});