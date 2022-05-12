function amazing() {
    window.addEventListener('keydown', function (e) {
     if (e.key == "q") {
        const sound = new Audio('keybuttons/Android-Sound-Effect-Meme.mp3');
        sound.play();
     }
   }, false); 
 }