document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  document.f.onsubmit = process;
  document.f.onreset = clear;
  // play music when open
  var audio = new Audio('old.mp3');
  audio.play();
  audio.loop = true;

  console.log("Begin");
  function process(){
    console.log('processing form');
     var userAdj = document.f.adj.value;
     var userNoun = document.f.noun.value;
     var userAnimal = document.f.animal.value;
     var userNoise = document.f.noise.value;
     console.log("defined vars");
     // var audio = document.getElementById('music');
     // audio.play();
     var myMsg = document.getElementById('results');
     myMsg.innerHTML = '<strong>' + userAdj + '</strong> Macdonald had a ' + userNoun + ', E-I-E-I-O. <br> and on that  ' + userNoun + ' he had an ' + userAnimal + ', E-I-E-I-O <br> with a ' + userNoise +" " + userNoise +' here, <br> and a ' + userNoise +" " + userNoise +' there, <br>here a ' + userNoise + ' there a ' + userNoise + ',<br> everywhere a ' + userNoise + ', <br>' + userAdj + ' Macdonald had a ' + userNoun + ', E-I-E-I-O.';
     console.log("showed msg");
     return false;
  }

  function clear(){
      // var audio = document.getElementById('music');
      // audio.pause();
      // audio.currentTime = 0;
      var myMsg = document.getElementById('results');
      myMsg.innerHTML = "";
      var rsetInput = document.getElementById('input-f').reset();
      return false;
  }

});
