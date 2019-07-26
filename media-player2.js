const video_api = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

$(document).ready(function(){
	var mediaPlayer = document.getElementById('media-video');
	mediaPlayer.controls = false;
	
	data_on_load = ()=>{
		console.log("data Loaded");
		mediaPlayer.play();
		mediaPlayer.loop = true;
	}
});
