window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const boxes = document.querySelectorAll(".boxes div");
    const visual = document.querySelector(".view-container");

    const colors = [];
    boxes.forEach(box => {
      colors.push(box.style.backgroundColor);
    });

    /**
     * We are gonna put  this colors in the div when we press them!
     */
    const colorsChange = [
      "red",
      "yellow",
      "green",
      "purple",
      "blue",
      "rgb(238, 68, 1)",
    ];
  
    //lets make the boxes make some noise!
    boxes.forEach((box, index) => {
      box.addEventListener("click", function() {
        // Reset the current time is fundamental.
        // If we dont do this, we'll have to wait until the sound finish
        sounds[index].currentTime = 0;
        // Play the sound in the box that we cliked
        sounds[index].play();
        changeColor(index);
      });
    });
  
    /**
     * We change de bg color of the box that we clicked, 300 ms after we
     * return the original bg color
     * @param {the index of each box} index 
     */
    const changeColor = (index) => {
      boxes[index].style.backgroundColor = colorsChange[index];
      setTimeout(() => {
        boxes[index].style.backgroundColor = colors[index];
      }, 300);

    };

    window.addEventListener("keyup", checkKeyPressed, false);

    /**
     * We set the keys that want to click on the boxes to play the noises.
     * @param {event} evt 
     */
    function checkKeyPressed(evt) {
      //q:81 w:87 e:69 i:73 o:79 o:80
      if (evt.keyCode == "81") {
          sounds[0].currentTime = 0;
          sounds[0].play();
          changeColor(0);
        }
        if(evt.keyCode == "87"){
          sounds[1].currentTime = 0;
          sounds[1].play();
          changeColor(1);
        }
        if(evt.keyCode == "69"){
          sounds[2].currentTime = 0;
          sounds[2].play();
          changeColor(2);
        }
        if(evt.keyCode == "73"){
          sounds[3].currentTime = 0;
          sounds[3].play();
          changeColor(3);
        }
        if(evt.keyCode == "79"){
          sounds[4].currentTime = 0;
          sounds[4].play();
          changeColor(4);
        }
        if(evt.keyCode == "80"){
          sounds[5].currentTime = 0;
          sounds[5].play();
          changeColor(5);
        }
    }
  });
  
