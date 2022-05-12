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
    if (e.key == "w") {
      var sound = document.getElementById("vine");
      sound.play();
      var key = document.getElementById("thew");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
    if (e.key == "e") {
      var sound = document.getElementById("hog");
      sound.play();
      var key = document.getElementById("thee");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
  }, false); 
}