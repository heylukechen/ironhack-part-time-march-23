// name, fur, size, colour,
class Animal {
    constructor(name, size, colour, fur){
        this.name = name;
        this.size = size;
        this.colour = colour;
        this.fur = fur;

    }

    feed(){
        console.log(`${this.name} is hungry`);
    }
}

class Pet extends Animal {
    constructor(name, size, colour, fur, owner){
        super(name, size, colour, fur);
        this.owner = owner;
    }

}

const jellePet = new Pet('rabbit', '15cm', 'white', true, 'Jelle')
const olliesPet = new Pet('labrador dog', '30cm', 'black', true, 'Ollie')
const hesamPet = new Pet('german shepherd', '15cm', 'brown', true, 'Hesam')
const vivianePet = new Pet('frog', '10cm', 'green', false, 'Viviane');

console.log(jellePet)

// jellePet.feed();
// olliesPet.feed();
// hesamPet.feed();
// vivianePet.feed();



















class Professor { // blueprint for an Object Professor in my system
    constructor(name, researchArea, nobelPrize){
        this.name = name;
        this.title = 'Professor'
        this.researchArea = researchArea;
        this.nobelPrize = nobelPrize;
    }

    doesResearch(){
        console.log(`${this.name} specialises in ${this.researchArea}`)
    }

    checkNobel(date){
        if(this.nobelPrize){
            console.log(`${this.name} is a nobel prize owner from ${date}`)
        }
        else {
            console.log(`${this.name} is not a nobel prize winner  from ${date}`)
        }
    }
    
}


const einstein = new Professor('Albert einstein', 'Mathematics', true)
const hawkings = new Professor('Stephen Hawkings', 'Physics', false)

// console.log('einstein', einstein)
// console.log('hawkings', hawkings)

// einstein.doesResearch()
// hawkings.doesResearch()

// einstein.checkNobel('1960')
// hawkings.checkNobel('2013')