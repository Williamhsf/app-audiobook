const btnPlayPause = document.getElementById("play-pause");
const btnBackward = document.getElementById("btn-backward");
const btnForward = document.getElementById("btn-forward");
const chapterTitle = document.getElementById("chapter");
const audio = document.getElementById("audio-chapter");
const totalChapters = 10;

let isPlaying = false;
let currentChapter = 1;

function trackPlay() {
  audio.play();
  isPlaying = true;
  btnPlayPause.classList.add("playing");
} 

function trackPause() {
  audio.pause();
  isPlaying = false;
  btnPlayPause.classList.remove("playing");
}

function trackPlayPause() {
  if (isPlaying === true) {
    trackPause();
  } else {
    trackPlay();
  }
}
    
function backwardChapter() {
  trackPause();
  
  if (currentChapter === 1) {
    currentChapter = totalChapters;
  } else {
    currentChapter -= 1;
  }
  
  audio.src = "/audios/" + currentChapter + ".mp3";
  chapterTitle.innerText = "Capítulo " + currentChapter;
}
    
    
    
function forwardChapter() {
  trackPause();
  
  if (currentChapter < totalChapters) {
    currentChapter += 1;
  } else {
    currentChapter = 1;
  }
  
  audio.src = "/audios/" + currentChapter + ".mp3";
  chapterTitle.innerText = "Capítulo " + currentChapter;
}



btnPlayPause.addEventListener("click", trackPlayPause);
btnForward.addEventListener("click", forwardChapter);
btnBackward.addEventListener("click", backwardChapter);

audio.addEventListener("ended", forwardChapter);