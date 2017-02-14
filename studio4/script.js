document.addEventListener("DOMContentLoaded", function(event) {
  var elements = document.getElementsByTagName('li');
  var tipTimer, tipId;

  for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener ('mouseover', function(event){
    tipId = document.getElementById(this.id + "Tip");
    tipId.style.zIndex = "100";
    tipTimer = setTimeout(showMsg, 1000);
  });

  elements[i].addEventListener ('mouseout', function(){
    clearTimeout(tipTimer);
    tipId.style.opacity = 0;
    tipId.style.zIndex = "-100";
  });
  }
  function showMsg(){
    //can I use "this" to find out which object called the function?
    tipId.style.opacity = 1;
  }
});

