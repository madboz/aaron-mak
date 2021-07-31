let windowWidth = window.innerWidth;
const headerBio = document.getElementsByClassName("header__bio")[0];

function reportWindowSize() {
	windowWidth = window.innerWidth;
  if (windowWidth < 576) {
		headerBio.innerHTML = '<a class="bio__name link" href="index.html">Aaron Mak</a> is a womenswear and footwear designer based in New York City.';
	} else {
		headerBio.innerHTML = '<a class="bio__name link" href="index.html">Aaron Mak</a> is a womenswear and footwear designer based in New York City. He holds a BFA in fashion design from Parsons and a BA in economics from Eugene Lang College.';
	}
}

reportWindowSize();
window.onresize = reportWindowSize;