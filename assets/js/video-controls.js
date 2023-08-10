'use strict'

let video = document.getElementById("video");
let playPauseButton = document.getElementById("playPauseButton");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseButton.className = "fas fa-pause fa-3x";
  } else {
    video.pause();
    playPauseButton.className = "fas fa-play fa-3x";
  }
}




