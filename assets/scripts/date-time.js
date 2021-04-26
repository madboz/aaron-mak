var headerDate = document.getElementsByClassName("data__date")[0];
var headerTime = document.getElementsByClassName("data__time")[0];
var cam = document.getElementsByClassName("cam")[0];
var header = document.getElementsByClassName("header")[0];

updateEverything();
setInterval(updateEverything, 1000);

function updateEverything() {
    d = checkDateTime();

    updateTime(d);
    updateDate(d);
    updateCam(d);
}

function updateTime(d) {
	headerTime.innerText = d.hours + ":" + d.minutes + ":" + d.seconds;
}

function updateDate(d) {
	headerDate.innerText = d.day + ". " + d.month + ". " + d.date + ", " + d.year;
}

function updateCam(d) {
	if (d.hours >= 0 && d.hours < 6) {
		cam.style.backgroundImage = "url('assets/images/cam/night.png')";
	}

	if (d.hours >= 6 && d.hours < 12) {
		cam.style.backgroundImage = "url('assets/images/cam/morning.png')";
	}

	if (d.hours >= 12 && d.hours < 19) {
		cam.style.backgroundImage = "url('assets/images/cam/afternoon.jpg')";
	}

	if (d.hours >= 19 && d.hours < 20) {
		cam.style.backgroundImage = "url('assets/images/cam/sunset.png')";
        header.classList.add("sunset");
	}

	if (d.hours >= 20 && d.hours <= 24) {
		cam.style.backgroundImage = "url('assets/images/cam/night.png')";
        header.classList.remove("sunset");
	}
}

function checkDateTime() {
	d = new Date();

	var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var day = d.getDay();
    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	if (seconds < 10) {
    	seconds = "0" + seconds;
    }

    if (minutes < 10) {
    	minutes = "0" + minutes;
    }

    if (hours < 10) {
    	hours = "0" + hours;
    }

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        day: days[day],
        month: months[month],
        date: date,
        year: year
    }
}