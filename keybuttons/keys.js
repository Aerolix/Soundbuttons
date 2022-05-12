function amazing() {
    window.addEventListener('keydown', function (e) {
     if (e.key == "q") {
        const sound = new Audio('adf.wav');
        music.play();
     }
   }, false); 
 }