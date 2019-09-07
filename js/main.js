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
  });
  