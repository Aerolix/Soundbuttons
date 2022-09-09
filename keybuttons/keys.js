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
    if (e.key == "r") {
      var sound = document.getElementById("nope");
      sound.play();
      var key = document.getElementById("ther");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
    if (e.key == "t") {
      var sound = document.getElementById("knocked");
      sound.play();
      var key = document.getElementById("thet");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
    if (e.key == "y") {
      var sound = document.getElementById("cola");
      sound.play();
      var key = document.getElementById("they");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
    if (e.key =="u") {
      var sound = document.getElementById("fbi");
      sound.play();
      var key = document.getElementById("theu");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
    if (e.key =="i") {
      var sound = document.getElementById("augh");
      sound.play();
      var key = document.getElementById("thei");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
    if (e.key =="o") {
      var sound = document.getElementById("no");
      sound.play();
      var key = document.getElementById("theo");
      key.style.backgroundColor = 'black';
      key.style.color = 'white';
      setTimeout(() => { key.style.backgroundColor = 'white'; }, 500);
      setTimeout(() => { key.style.color = 'black'; }, 500);
    }
  }, false); 
}