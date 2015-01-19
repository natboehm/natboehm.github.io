var slowLorisImg = document.querySelector('img');

slowLorisImg.onclick = function() {
	var imageSrc = slowLorisImg.getAttribute('src');
	
	if (imageSrc === 'http://i1.walesonline.co.uk/incoming/article1785459.ece/alternates/s2197/a-slow-loris-504608477.jpg') {
	slowLorisImg.setAttribute ('src','http://img3.wikia.nocookie.net/__cb20141118173223/creepypastaitalia/it/images/7/7f/Rake-0.jpg');
	document.getElementById('goatScream').play();
	} else {
		slowLorisImg.setAttribute ('src','http://i1.walesonline.co.uk/incoming/article1785459.ece/alternates/s2197/a-slow-loris-504608477.jpg');
	}
}
