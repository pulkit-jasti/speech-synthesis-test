if ('speechSynthesis' in window) {
	var msg = new SpeechSynthesisUtterance();

	let volume = 0;
	let rate = 0;
	let pitch = 0;

	document.getElementById('volume-input').addEventListener('change', function () {
		document.getElementById('volume-value').innerHTML = this.value;
		volume = this.value;
	});

	document.getElementById('rate-input').addEventListener('change', function () {
		document.getElementById('rate-value').innerHTML = this.value;
		rate = this.value;
	});

	document.getElementById('pitch-input').addEventListener('change', function () {
		document.getElementById('pitch-value').innerHTML = this.value;
		pitch = this.value;
	});

	document.getElementById('speak').addEventListener('click', () => {
		msg.text = document.getElementById('main-text').value;

		var voices = window.speechSynthesis.getVoices();
		msg.voice = voices[2];

		// Settings
		msg.volume = volume;
		msg.rate = rate;
		msg.pitch = pitch;

		console.log(msg);
		speechSynthesis.speak(msg);
	});
} else {
	alert("Sorry, your browser doesn't support the speech synthesis API !");
}

function setSpeech() {
	return new Promise(function (resolve, reject) {
		let synth = window.speechSynthesis;
		let id;

		id = setInterval(() => {
			if (synth.getVoices().length !== 0) {
				resolve(synth.getVoices());
				clearInterval(id);
			}
		}, 10);
	});
}

let s = setSpeech();
s.then(voices => console.log(voices));
