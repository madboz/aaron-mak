var headerDate = document.getElementsByClassName("data__date")[0];
var headerTime = document.getElementsByClassName("data__time")[0];
var cam = document.getElementsByClassName("cam")[0];
var header = document.getElementsByClassName("header")[0];
var links = document.getElementsByTagName("A");
var modals = document.getElementsByClassName("modal");
var paths = document.getElementsByTagName("PATH");

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
	headerDate.innerText = d.day + ", " + d.month + " " + d.date + ", " + d.year;
}

function updateCam(d) {
	if (d.hours >= 6 && d.hours < 12) {
		cam.style.backgroundImage = "url('assets/images/cam/morning.gif')";
	}

	if (d.hours >= 12 && d.hours < 19) {
        cam.style.backgroundImage = "url('assets/images/cam/afternoon.gif')";
	}

	if (d.hours >= 19 && d.hours < 20) {
		cam.style.backgroundImage = "url('assets/images/cam/sunset.gif')";
        header.classList.add("sunset");
	}

	if ((d.hours >= 20 && d.hours <= 24) || (d.hours >= 0 && d.hours < 6)) {
        header.classList.remove("sunset");
        // header.classList.add("spring--night");
        // links[0].classList.add("spring--night");
        // links[0].style.textDecorationColor = "#FFFFFF";
        cam.style.backgroundImage = "url('assets/images/cam/night.gif')";

        // for (var i = links.length - 1; i >= 0; i--) {
        //     links[i].classList.add("spring--night");
        //     links[i].style.textDecorationColor = "#FFFFFF";
        // }

        // for (var j = modals.length - 1; j >= 0; j--) {
        //     modals[j].classList.add("spring--night");
        // }

        // console.log(paths)

        // for (var n = paths.length - 1; n >= 0; n--) {
        //     paths[n].classList.add("spring--night");
        // }
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