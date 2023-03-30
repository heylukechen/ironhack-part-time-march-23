// Advanced Functions Practice

function execCallback(name, anonFunc) {
  anonFunc(name);
}
 
const printName = execCallback('sandra', function(name) {
  console.log(name[0].toUpperCase() + name.slice(1));
});

const getLength = execCallback('aleksandra', function(str) {
  console.log(`${str} has ${str.length} letters.`);
});

// 'sandra' --> ['s','a','n','d','r','a']
const studentsArray = ['anna', 'brian', 'chloe'];
const studentsArrayB = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
  { name: "Sarah", age: 20 },
  { name: "Bill", age: 19 }
];
// Loop over an array and print each element
// ES5 syntax
// studentsArray.forEach(function (el){
//   console.log('Hello ' + el);
// });

// ES6 
// studentsArray.forEach((student) => {
//   console.log('Hello ' + student);
// });

// studentsArrayB.forEach((student) => {
//   if(student.name[0] === 'B'){
//     console.log('Hello ' + student.name);
//   }
// });


const array = [1, 2, 3];
 
const newArray = array.map(function(number) {
  return number * 2;
});
// const newArray = array.map(number => number * 2);
 
console.log(newArray);

const countries = ['Cape Verde', 'Zanzibar', 'Dominican Republican'];

const lowercasedCountries = countries.map(function(countryName){
  if(countryName[0] === 'Z'){
    return countryName.toLowerCase();
  }
  else {
    return countryName;
  }
})
console.log(lowercasedCountries)

const newCities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capitalizedCities = newCities.map(city => city[0].toUpperCase() + city.slice(1))
console.log(capitalizedCities)

const words = ['This', 'is', 'one', 'big', 'string'];
 
// ES6:
const sentence = words.reduce((sum, word) => sum + ` ${word}`);
 
console.log(sentence); 

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 }
];
 
const ages = people.reduce(function (sum, person) {
  return sum + person.age;
}, 0); // initialValue to 0
 
console.log(ages); // <== 142


const numbers = [1, 2, 3, 4];
let total = 0;
 
numbers.forEach(function (number) {
  total += number; // total = total + number;
});
 
console.log(total);
// 10


const testNumbers = [1, 2, 3, 4, 5, 6];
 
const evenNumbers = testNumbers.filter(function (number) {
  return number % 2 === 0; // numbers that are even
});

const oddNumbers = testNumbers.filter(function (number) {
  // return number % 2 === 1; // numbers that are odd
  return number % 2 !== 0;
});
console.log('evenNumbers', evenNumbers); 
console.log('oddNumbers', oddNumbers); 

const group = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 20 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];

const drinkingAgeGroup = group.filter(person => person.age >= 21)
const sumAgeGroup = group.reduce((accumulator, currentPerson) => accumulator + currentPerson.age , 0)

console.log('drinkingAgeGroup', drinkingAgeGroup)
console.log('sumAgeGroup', sumAgeGroup)










// Array methods Examples

// Return a list of places with a pool
const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  // Return a list of places with a pool

  const placesWithAPool = places.filter(airbnbOffering => airbnbOffering.pool === true)
  console.log('placesWithAPool', placesWithAPool)

// Return a list of places with a pool and a garage
const placesWithAGarageAndPool = places.filter(airbnbOffering => airbnbOffering.pool === true && airbnbOffering.garage === true )
const nameOfPlacesWithAGarageAndPool = placesWithAGarageAndPool.map(place => { return {title: place.title, price: place.price}})
// Return a list of places with neither pool or garage
console.log('placesWithAGarageAndPool', placesWithAGarageAndPool)
console.log('nameOfPlacesWithAGarageAndPool', nameOfPlacesWithAGarageAndPool )