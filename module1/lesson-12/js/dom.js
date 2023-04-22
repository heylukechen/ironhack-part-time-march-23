const heroDiv = document.getElementById('hero');
heroDiv.textContent = 'Welcome back :)'; // overrides the current textContent value, it change sit to Welcome back :)
// use typeof to check data types
const liElements = document.getElementsByClassName('items');

const firstUlElement = document.querySelector('ul');
const heroElement = document.querySelector('#hero')

const itemsElements = document.querySelectorAll('.items') // retrieving tags, ids and classes
itemsElements[0].innerText = '';
itemsElements[1].style.color = 'blue';
itemsElements[2].style.background = 'pink';

const h1Element = document.createElement('h1');
h1Element.setAttribute('style', 'color: grey; font-size:15px;')
h1Element.innerText = "Hello World";
h1Element.style.background = 'white';

document.getElementById('container').appendChild(h1Element);
// document.getElementById('container').innerHTML = `<h1 style="background:white;color: grey; font-size:15px;">Hello World</h1>`

firstUlElement.removeChild(itemsElements[2]);
firstUlElement.removeChild(itemsElements[1]);

heroElement.setAttribute('style', 'background: purple; color:silver;')
heroDiv.style.color = 'green'

const catImage = document.getElementById('catImg');

catImage.setAttribute('style', 'width:100px; height: 100px; border-radius:75%;')

setTimeout(()=>{
    itemsElements[1].style.color = '';
    itemsElements[2].style.background = '';
}, 2000)

// console.log('catImage src', catImage.getAttribute('src'))
// console.log('catImage style', catImage.getAttribute('style'))


// console.log('firstUlElement', firstUlElement)
// console.log('heroElement innerText', heroElement.innerText)
// console.log('itemsElements', itemsElements[1])



if(catImage.getAttribute('src') === 'images/cat.jpg'){
   
}
else {
    catImage.setAttribute('src', 'images/cat.jpg')
}

const headerElement = document.querySelector('header')
const containerElement = document.getElementById('container')
// document.querySelector('body').removeChild(containerElement);

document.getElementById('shoppingButton').addEventListener('click', function(event){
   // 1. Get the value of my input element
   const userInput = document.getElementById('shoppingBar').value;
   console.log('userInput', userInput)
   // 2. pass this value to a li element
   const liElement = document.createElement('li')
   liElement.innerText = userInput;
   // 3. Display the li element within my existing <ol>
   document.getElementById('shopping-list').appendChild(liElement)
   // 4. Clear the input bar for some new user input
   document.getElementById('shoppingBar').value = '';
})

document.getElementById('shoppingBar').addEventListener('keydown', function(event){
    // console.log(event.currentTarget.value)
    // const liElement = document.createElement('li')
    // liElement.innerText = event.currentTarget.value;
    // document.getElementById('shopping-list').appendChild(liElement)
})

document.getElementById('clear').addEventListener('click', function(){
    // document.querySelector('header').innerHTML = '';
   document.body.removeChild(headerElement);
})