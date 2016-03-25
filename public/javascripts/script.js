var a     = document.getElementById('navaudio');
var t     = document.getElementById('navaudiotitle');

function playSelected(audio, title) {
  console.log(' ... ', audio );
  console.log(' ... ', title );
  a.setAttribute('src', audio);
  a.load();
  t.innerHTML = title;
  a.play();
}

function pauseSelected(){
  a.pause();
}