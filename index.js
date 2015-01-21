var slowLorisImg = document.querySelector('img');

var goatScreamAud = document.getElementById('goatScream'); 

function playGoat() {
	goatScreamAud.play(); 
}

function stopGoat() {
	goatScreamAud.pause();
}

slowLorisImg.onclick = function() {
	var imageSrc = slowLorisImg.getAttribute('src');

	if (imageSrc === 'http://i1.walesonline.co.uk/incoming/article1785459.ece/alternates/s2197/a-slow-loris-504608477.jpg') {
		slowLorisImg.setAttribute ('src','http://img3.wikia.nocookie.net/__cb20141118173223/creepypastaitalia/it/images/7/7f/Rake-0.jpg'); 
		playGoat();

	} else {
		slowLorisImg.setAttribute ('src','http://i1.walesonline.co.uk/incoming/article1785459.ece/alternates/s2197/a-slow-loris-504608477.jpg');
		stopGoat();   
	}
}
