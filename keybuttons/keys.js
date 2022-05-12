function amazing() {
    window.addEventListener('keydown', function (e) {
     if (e.key == "q") {
        var sound = document.getElementById("android");
        sound.play();
     }
   }, false); 
 }