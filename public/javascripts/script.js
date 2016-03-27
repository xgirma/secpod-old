/* home page */
var homeAudio = document.getElementById('homenaveaudio');

function playHomeAudio() {
  if(homeAudio.paused){
    homeAudio.play();
  } else {
    homeAudio.pause();
  }
}

function stopHomeAudio() {
  homeAudio.pause();
  homeAudio.currentTime = 0;
}

/* list page */
var listAudio = document.getElementById('selected-audio');
var listTitle = document.getElementById('selected-title');
var nowPlaying = document.getElementById('now-playing');

function playListAudioFromList(audio, title) {
  nowPlaying.style.display = "block";
  if(getCurrentListAudio() !== audio){
    listAudio.setAttribute('src', audio);
    listAudio.load();
    listTitle.innerHTML = title;
    listAudio.play();
  }

  else if (getCurrentListAudio() === audio) {
    if (listAudio.paused) {
      listAudio.play();
    } else {
      listAudio.pause();
    }
  }
}

function playListAudioFromNav(){
  nowPlaying.style.display = "block";
  if(listAudio.paused){
    listAudio.play();
  } else {
    listAudio.pause();
  }
}

function stopListAudio() {
  listAudio.pause();
  nowPlaying.style.display = "none";
  listAudio.currentTime = 0;
}

function getCurrentListAudio() {
  return listAudio.getAttribute('src');
}


