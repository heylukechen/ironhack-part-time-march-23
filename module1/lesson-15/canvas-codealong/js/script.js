class Component {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;

      this.speedX = 0; // used to update the X position
      this.speedY = 0; // used to update the Y position
    }
   
    update() {
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() { // updating the position of the Component
        this.x += this.speedX;
        this.y += this.speedY;
      }
}

function updateGameArea() { // updating our Game
    myGameArea.clear(); // clear Canvas
    player.newPos(); // update 
    player.update(); // update the player's position
    // update the backGround movement
}

const myGameArea = {
    canvas: document.createElement('canvas'),
    start: function () {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext('2d');
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20); // execute updateGameArea every 20ms
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
  };


myGameArea.start() // initialize the Game Area

const player = new Component(30, 30, 'red', 0, 110); // generate the player 

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
        player.speedY -= 1;
        break;
      case 40: // down arrow
        player.speedY += 1;
        break;
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
  });

document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
});