function amazing() {
    window.addEventListener('keydown', function (e) {
     if (e.key == "q") {
        var sound = document.getElementById("android");
        sound.play();
        var key = document.getElementById("theq");
        key.style.backgroundColor = 'black';
        key.style.color = 'white';
        setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
        setTimeout(() => { key.style.color = 'black'; }, 500);
     }
   }, false); 
 }