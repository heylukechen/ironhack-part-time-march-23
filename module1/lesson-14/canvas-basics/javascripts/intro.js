const canvas = document.getElementById('example'); // target the canvas element
const ctx = canvas.getContext('2d');


ctx.fillText("Welcome to my awesome game", 50, 50)

const fireballImg = new Image(); // creating a new Image using a constructor function
fireballImg.src = './images/fireball.png';


// setTimeout(()=>{
//     ctx.clearRect(0, 0, 300, 300);
//     ctx.fillText("setTimeout was successful", 50, 50)
// }, 2000)

function draw(x, y) {
    // use id "example" to get <canvas></canvas> tag
   
    // clears whole canvas to simulate animation (==movement) of the rectangle
    ctx.clearRect(0, 0, 300, 300);
   
    // colors rectangle with this color
    ctx.fillStyle = 'green';
   
    // creates rectangle => ctx.fillRect(x, y, width, height);
   //  ctx.fillRect(x, y, 50, 50);
   ctx.drawImage(fireballImg, x, y, 50, 50);
   
    // changes position of X coordinate
    // x += 3; // x = x+3; = 3
    x -= 3;
    y -= 3;
    // calls itself every 30ms

    if( y < 0){
        setTimeout(`draw(300,300)`, 10);
    }
    else {
        setTimeout(`draw(${x}, ${y})`, 10);
    }
    // recursively call draw(3, 0)
    // setTimeout(()=>{
    //     draw(x, y)
    // }, 30)
  }

 

// function draw(x, y){

// ctx.clearRect(x, y, 300, 300) // clearing out the canvas board to be empty
//  // initialize the context to be 2D


// const a = 50;
// const b = 250;

// ctx.fillRect(100, 100, 100, 100); //Draws a filled rectangle.
// // // ctx.strokeRect(60, 60, 40, 40); //Draws a rectangular outline.
// // ctx.clearRect(60, 60, 40, 40);

// ctx.fillStyle = 'purple';
// ctx.fillRect(260, 260, 30, 30);

// // // start the path
// // ctx.beginPath();
// // // starting position is x=50, y=50
// // ctx.moveTo(a, a);
// // // draw the line that has final coordinates x=250, y=50
// // ctx.lineTo(b, a);
 
// // // .stroke() executes the drawing
// // // ctx.stroke();
 
// // // start a new line from these coordinates: x=250, y=50
// // // ctx.moveTo(y, x);
// // // draw the line that has final coordinates x=250, y=100
// // ctx.lineTo(b, 100);
// // // .stroke() executes the drawing
// // // ctx.stroke();

// // ctx.lineTo(a, 100);
// // // ctx.moveTo(x, 100)

// // ctx.stroke();
 
// // // close the path
// // ctx.closePath();

// // ctx.beginPath();
// // // ctx.arc(x, y, radius, startAngle, endAngle)

// // ctx.arc(150, 170,100, 0, Math.PI * 2);
// // ctx.strokeStyle = 'green';
// // ctx.fillStyle = 'red';
// // ctx.fill();
// // ctx.lineWidth = 20;
// // ctx.stroke();
// // ctx.closePath();

// // ctx.font = '48px serif';
// // ctx.fillStyle = 'purple';
// // ctx.fillText('Hello world', 10, 50);
// }