function move(idName) {
  var elem = document.getElementById(idName);
  console.log(elem.id);
  var width = 0;
  if (elem.id == "myBar") {
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  } else if (elem.id == "myBar2") {
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        if (width < 75) {
          width++;
          elem.style.width = width + "%";
        } else {
          return;
        }
      }
    }
  } else if (elem.id == "myBarYellow") {
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        if (width < 95) {
          width++;
          elem.style.width = width + "%";
        } else {
          return;
        }
      }
    }
  }
}
move("myBar");
move("myBar2");
move("myBarYellow");
