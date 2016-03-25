var a = document.getElementById('navaudio');

function playSelected(audio) {
  console.log(' ... ', audio );
  a.setAttribute('src', audio);
  a.load();
  a.play();
}

function pauseSelected(){
  a.pause();
}