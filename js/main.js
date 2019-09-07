window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const boxes = document.querySelectorAll(".boxes div");
    const visual = document.querySelector(".view-container");
    //We are going to create bubbles with the same colors as the boxex
    const colors = [
      "#60d394",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3"
    ];
  
    //lets make the boxes make some noise!
    boxes.forEach((box, index) => {
      box.addEventListener("click", function() {
        // Reset the current time is fundamental.
        // If we dont do this, we'll have to wait until the sound finish
        sounds[index].currentTime = 0;
        // Play the sound in the box that we cliked
        sounds[index].play();
        createBubble(index);
      });
    });
  
    // Each bubble will be a new div
    const createBubble = (index) => {
      //Let's create bubbles!
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = `jump 1s ease`;
      //Remember that 1 bubble will be a new div in the dom so maybe the performance after some clicks will.. well you know
      //Solution: we use the bubble, we remove the bubble :V
      bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
      });
    };

    window.addEventListener("onkeypress", checkKeyPressed, false);

    function checkKeyPressed(evt) {
      //q:81 w:87 e:69 i:73 o:79 o:80
      if (evt.keyCode == "81") {
          sounds[0].currentTime = 0;
          sounds[0].play();
          createBubble(0);
        }
        if(evt.keyCode == "87"){
          sounds[1].currentTime = 0;
          sounds[1].play();
          createBubble(1);
        }
        if(evt.keyCode == "69"){
          sounds[2].currentTime = 0;
          sounds[2].play();
          createBubble(2);
        }
        if(evt.keyCode == "73"){
          sounds[3].currentTime = 0;
          sounds[3].play();
          createBubble(3);
        }
        if(evt.keyCode == "79"){
          sounds[4].currentTime = 0;
          sounds[4].play();
          createBubble(4);
        }
        if(evt.keyCode == "80"){
          sounds[5].currentTime = 0;
          sounds[5].play();
          createBubble(5);
        }
    }
  });
  
