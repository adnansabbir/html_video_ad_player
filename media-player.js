document.addEventListener("DOMContentLoaded", function(){ initialiseMediaPlayer(); }, false);

var mediaPlayer;
var play_btn = document.getElementById('play-pause-button');

function initialiseMediaPlayer(){
	mediaPlayer = document.getElementById('media-video');
	mediaPlayer.controls = false;
}

function togglePlayPause(){
	if (mediaPlayer.paused || mediaPlayer.ended){
		changeButtonType(play_btn, "pause");
		mediaPlayer.play();
	}else{
		changeButtonType(play_btn, "play");
		mediaPlayer.pause();
	}
}

function changeButtonType(btn, value){
	btn.title = value;
	btn.innerHTML = value;
   	btn.className = value;
}

function stopPlayer(){
	changeButtonType(play_btn, "play");
	mediaPlayer.pause();
	mediaPlayer.currentTime = 0;
}

function changeVolume(direction){
	if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
	else mediaPlayer.volume -= mediaPlayer.volume == 0 ? 0 : 0.1;
	mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}