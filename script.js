
//PULL UP NAV
  $(document).ready(function(){
    $(".bringup").click(function(){
      $(this).siblings(".more").toggle();
    });
  });
  

//PLAY SOUND ON CLICK  
function play(element) {
  var audio = document.getElementById(element);
  if (audio.paused) {
    audio.play();
  }
  else {
    audio.pause();
  }
}

