function sayHi(){
    return "Hi World"
}

function makeSum(a, b){
    console.log(a+b);
    return `${a+b}`;
}


//sayHi(); // wait until sayHi is finished --> 0.1s
// const data = fetch('https://google.com/')// making a request to google for some data ---> 5s
// const sum = makeSum(4, 3)// --> 4s


setTimeout(function(){
    console.log('holaaa');
}, 3000)

// let i = 1;

// const intervalId = setInterval(function () {
//   console.log(i);
 
//   i++;// i = i+ 1;
 
//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);


const intervalId = setInterval(function(){
    console.log('heyyy')
}, 2000)

setTimeout(function(){
    clearInterval(intervalId)
}, 6000)

// let counter = 1;

// const callbackFunction = function () {
//   console.log(counter);
//   timeoutId = setTimeout(callbackFunction, 1000);
 
//   counter += 1;
 
//   if (counter > 10) {
//     clearTimeout(timeoutId);
//   }
// };
// let i = 1;

// while(i < 10){

//     setTimeout(function(){

//     },1000)
// }
 
let timeoutId = setTimeout(callbackFunction, 1000);