function amazing() {
    window.addEventListener('keydown', function (e) {
     if (e.key == "q") {
        var sound = document.getElementById("android");
        sound.play();
        var key = document.getElementById("theq");
        key.style.backgroundColor = 'black';
        key.style.color = 'white';
     }
   }, false); 
 }