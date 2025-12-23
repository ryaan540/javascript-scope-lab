

// Write your solution in this file!



// Step 1: Global Variables
const burgers = ["Hamburger","Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Step 2: Function (Function Scope)
function addBurger(){
    const newBurger = "Flatburger";   
    burgers.push(newBurger);        
    if(true){
        const anotherNewBurger = "Maple Bacon Burger"; 
        burgers.push(anotherNewBurger);
    }
}
// Step 3: Block Scope
function changeFeaturedDrink() {
    featuredDrink = "The JavaShake"; 
};

