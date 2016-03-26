/* home page */
var homeaudio = document.getElementById('homenaveaudio');

function playFeatured() {
  homeaudio.load();
  homeaudio.play();
}

function stopFeatured() {
  homeaudio.pause();
}

/* list page */
var listaudio = document.getElementById('selected-audio');
var listtitle = document.getElementById('selected-title');
var nowplaying = document.getElementById('now-playing');

function playSelected(audio, title) {
  console.log(' ... ', audio);
  console.log(' ... ', title);
  listaudio.setAttribute('src', audio);
  listaudio.load();
  listtitle.innerHTML = title;
  listaudio.play();
  nowplaying.style.display = "block";
}

function stopSelected() {
  listaudio.pause();
  nowplaying.style.display = "none";
}

function getSelectedAudio(){
  return listaudio.getAttribute('src');
}

function getSelectedTitle(){
  return listtitle.innerHTML;
}


