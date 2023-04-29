const secondCanvas = document.getElementById('secondExample'); // target the secondCanvas element
const secondCtx = secondCanvas.getContext('2d');

// RANDOM COLOR ANIMATION 
// const color = {
//     red: Math.floor(Math.random() * 255),
//     green: Math.floor(Math.random() * 255),
//     blue: Math.floor(Math.random() * 255),
//     rgb: function () {
//       return `rgb(${this.red}, ${this.green}, ${this.blue})`;
//     }
//   };
   
//   let animationFrames = 0; // 1sec -> 60

//   function updateCanvas() {

//     animationFrames += 1;

//     color.red = (color.red + 1) % 255;
//     color.blue = (color.blue + 1) % 255;
//     color.green = (color.green + 1) % 255;
   
//     secondCtx.clearRect(0, 0, 480, 270);
//     secondCtx.fillStyle = color.rgb();
//     secondCtx.fillRect(0, 0, 150, 150);
   
//     if(animationFrames < 300){
//         requestAnimationFrame(updateCanvas); // requestAnimationFrames executes the callback 60 times per second
//     }
//     else{
//         console.log(animationFrames)
//     }
//     // 
//   }
   
//   updateCanvas();

// Falling Rectangles Animation

// ctx.fillStyle = '#FF0000';
 
// let speed1 = 300;
// let speed2 = 300;
// let speed3 = 300;

// function clearCanvas() {
//     ctx.clearRect(0, 0, 300, 300); // 700 and 450 are canvas width and height
//   }

// function drawCanvas(x, y, w, h, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, w, h);
// }

//   function updateCanvas() {
//     // in order to see animation, let's change speed1,2 and 3 on every call
//     speed1 -= 1;
//     speed2 -= 2;
//     speed3 -= 3;
   
//     // clear the canvas
//     clearCanvas();
   
//     // redraw the canvas
//     drawCanvas(speed1, 10, 50, 50, 'red'); // draw red rectangle
//     drawCanvas(speed2, 100, 50, 50, 'green'); // draw green rectangle
//     drawCanvas(speed3, 150, 50, 50, 'yellow'); // draw yellow rectangle
   
//     requestAnimationFrame(updateCanvas);
//   }
   
//   updateCanvas();

// Create Ghost on Canvas
// class Ghost {
//     constructor() {
//       this.x = 25;
//       this.y = 25;
   
//       // Load the image
//       const img = new Image();
//       img.addEventListener('load', () => {
//         // Once image loaded => draw
//         this.img = img; // add new property "img"
//         this.draw(); // draw the image on canvas
//       });
//       img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif'; // sets the "src" attribute
//     }

//     draw() {
//         secondCtx.drawImage(this.img, this.x, this.y, 50, 50);
//       }
      
//     moveUp() {
//       this.y -= 25;
//     }
//     moveDown() {
//       this.y += 25;
//     }
//     moveLeft() {
//       this.x -= 25;
//     }
//     moveRight() {
//       this.x += 25;
//     }
//   }
   
//   const ghost = new Ghost();// generating my Ghost on Canvas

//   function updateCanvas() {
//     secondCtx.clearRect(0, 0, 300, 300); // clear Canvas
//     secondCtx.fillText('Ghost_x: ' + ghost.x, 240, 10); // lets the user know of the Ghost new X position
//     secondCtx.fillText('Ghost_y: ' + ghost.y, 240, 20); // lets the user know of the Ghost new Y position
   
//     ghost.draw(); // redraws the ghost on it's new position
//   }

  // figure out what keyCode spacebar is
  // add it to the event listener
  // determine the original point and assign it when the spacebar is pressed

//   document.addEventListener('keydown', event => {
//     console.log(event)
//     switch (event.keyCode) {
//       case 32:
//         ghost.x = 25;
//         ghost.y = 25;
//       case 38:
//         ghost.moveUp();
//         console.log('up', ghost);
//         break;
//       case 40:
//         ghost.moveDown();
//         console.log('down', ghost);
//         break;
//       case 37:
//         ghost.moveLeft();
//         console.log('left', ghost);
//         break;
//       case 39:
//         ghost.moveRight();
//         console.log('right', ghost);
//         break;
//     }
//     updateCanvas();
//   });

// Horizontal image movement 

// const img = new Image();
// img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

// const backgroundImage = {
//   img: img,
//   x: 0,
//   speed: -1,

//   move: function() {
//     this.x += this.speed; // 0 -> -1 -> -2
//     this.x %= canvas.width; // this.x = this.x % canvas.width --> 0
//     // when we reach a certain point we go back to the beginning
//   },

//   draw: function() {
//     secondCtx.drawImage(this.img, this.x, 0);
//     secondCtx.drawImage(this.img, this.x + canvas.width, 0);
//     // if (this.speed < 0) {
//     //   secondCtx.drawImage(this.img, this.x + canvas.width, 0);
//     // }
//     //  else {
//     //   secondCtx.drawImage(this.img, this.x - this.img.width, 0);
//     // }
//   },
// };

// function updateCanvas() {
//   backgroundImage.move(); // this will update the background image X position

//   secondCtx.clearRect(0, 0, canvas.width, canvas.height); // this will clear Canvas 
//   backgroundImage.draw(); // this will draw the new position of the background Image

//   requestAnimationFrame(updateCanvas); // this will loop the animation process
// }

// // start calling updateCanvas once the image is loaded

// img.addEventListener('load', updateCanvas) // same as img.onload = updateCanvas;

// Vertical animation
const img = new Image();
 img.src = 'https://png.pngtree.com/element_our/md/20180321/md_d76401cff8291e4834a4754df44cb637.jpg';

const backgroundImage = {
    img: img,
    x: 0,
    y:0,
    speed: -1,
  
    move: function() {
      this.y += this.speed; // this.y = this.y - 1
      this.y %= canvas.height; // this.y = this.y % backgroundCanvas.height --> if (this.y === backgroundCanvas) this.y = 0
    },
  
    draw: function() {
      secondCtx.drawImage(this.img, 0, this.y);
      secondCtx.drawImage(this.img, 0, this.y + this.img.height);
  }
  }

  function updateBackgroundCanvas() {
    backgroundImage.move(); // updates the backgroundImage Y position
    secondCtx.clearRect(0, 0, canvas.width, canvas.height); // clears the canvas for the next frame
    backgroundImage.draw(); // draws the backgroundImage at its new Y position

    requestAnimationFrame(updateBackgroundCanvas) //
    // setInterval(updateBackgroundCanvas, 200)
}

img.onload = function() {
    updateBackgroundCanvas()
};
    
// secondCtx.fillStyle = "#000";
// secondCtx.fillRect(0,0, 50,50);
// secondCtx.save();
// secondCtx.fillRect(60,60, 50,50);
// secondCtx.save();
// secondCtx.fillRect(100,100, 50,50);
// secondCtx.clearRect(0,0,300,300)
// secondCtx.restore();


