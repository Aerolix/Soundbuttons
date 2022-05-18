  window.addEventListener('keydown', function (e) {
      if (e.key == "c")  {
          var code = this.prompt("Secret Code");
          if (code = "cole") {
            correct();
        }
      }
   }, false); 

function correct() {
    alert(("good"))
}

 