// Create a class Human with properties name, gender, age, calories
class Human {
    constructor(name, gender, age, calories){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.calories = calories
    }

// Add a method eatFood(food) to class Human that increases the number of calories for a human accordingly to the food's
// protein, carbs and fat properties
eatFood(food){
    this.calories += food.totalCalories;// update property "calories"
}
// Be sure to test those methods on the instances you created earlier to make sure they work
}
// Create a class Food with properties name, protein, carbs, fat
class Food {
    constructor(name, protein, carbs, fat){
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.totalCalories = 0;
        this.printCalories();
    }
// Carbohydrates provides 4 calories per gram
// Protein provides 4 calories per gram
// Fat provides 9 calories per gram
// Add a method printCalories() for classFood that prints out how many calories a specific food provides
// i.e: Eating banana will add 89 calories
    printCalories(){
        // Extract the calories from properties protein, carbs and fat
        const proteinCalories = this.protein * 4;
        const carbsCalories = this.carbs * 4;
        const fatCalories = this.fat * 9;
        // Add them together
        this.totalCalories = proteinCalories + carbsCalories + fatCalories;
        // Print this number 
        console.log(`Eating ${this.name} will add ${this.totalCalories} calories`)
    }
}
// Create instances of each class and print them to the console to confirm they work
const human = new Human('Rafael Brigati', 'male', 31, 0);
const pennePasta = new Food('Penne Pasta', 20, 30, 15);
const pizza = new Food('Pizza pepperoni', 23,43,13)



// pennePasta.printCalories();
console.log('pennePasta', pennePasta)
console.log('pizza', pizza)

human.eatFood(pennePasta);
console.log('human after eating pennePasta', human)
human.eatFood(pizza)
console.log('human after eating pizza', human)


// Create a subclass Man from class Human, it should have it's gender set to 'male' automatically
class Man extends Human {
    constructor(name, age, calories){
        super(name, 'male', age, calories)
        
    }
    eatFood(food){ // overriding the method eatFood
        this.calories += food.totalCalories/2;
    }
}

const aMan = new Man('John Doe', 34, 0);
const bMan = new Man('Dave Chappelle', 54, 0);
bMan.eatFood(pennePasta);
console.log('aMan', aMan)
console.log('bMan', bMan)
// Create a subclass Woman from class Human, it should have it's gender set to 'female' automatically
class Woman extends Human {
    constructor(name, age, calories){
        super(name, 'female', age, calories)
        
    }
}

const aWoman = new Woman('Nina Simone', 67, 0);
const bWoman = new Woman('Beyonce', 35, 0);
bWoman.eatFood(pizza)
console.log('aWoman', aWoman)
console.log('bWoman', bWoman)
// Create instances of each class and print them to the console to confirm they work