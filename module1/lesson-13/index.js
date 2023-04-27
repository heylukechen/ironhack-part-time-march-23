const catPictures = [
                "https://cdn2.thecatapi.com/images/dpb.jpg", 
                "https://cdn2.thecatapi.com/images/3oe.gif", 
                "https://cdn2.thecatapi.com/images/891.gif", 
                "https://cdn2.thecatapi.com/images/ava.jpg", 
                "https://cdn2.thecatapi.com/images/dek.jpg", 
                "https://cdn2.thecatapi.com/images/MTUyMTIyNQ.jpg", 
                "https://cdn2.thecatapi.com/images/a4m.jpg", 
                "https://cdn2.thecatapi.com/images/bj3.jpg",
                "https://cdn2.thecatapi.com/images/MTUyODE2NA.jpg",
                "https://cdn2.thecatapi.com/images/dkt.jpg"
]
document.getElementById('cat-button').addEventListener('click', function(){
// every click generate a random number
const randomNumber = Math.floor(Math.random()*catPictures.length)
// get a random image from the array
console.log(catPictures[randomNumber])
// display this image on the page
   const imgElement = document.createElement('img') // create an img element
    // assign a src value to it
    imgElement.setAttribute('src', catPictures[randomNumber])
    imgElement.style.width = '100px';
    imgElement.style.height = '100px';
    // target a container on the html page
   document.querySelector('#cat-container').appendChild(imgElement);
   console.log(imgElement)
   // document.getElementById('cat-container').innerHTML = `${imgElement}`; 
   // append the image in the container

})