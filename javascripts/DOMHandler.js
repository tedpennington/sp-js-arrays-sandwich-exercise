console.log("DOMHandler.js loaded");

/*
##### DOMHandler.js

```js

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");


  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});*/

var finalSandwichPrice = 0;
var selectedTopping;
var output = document.getElementById("output");
var bread = document.getElementById("bread");
var meat = document.getElementById("meat");
var cheese = document.getElementById("cheese");
var condiments = document.getElementById("condiments");
var veggies = document.getElementById("veggies");






// var sandwichOrderObj = {
    //       "Bread: ": sandwichMaker.getBreads(),
    //       "Meats: ": sandwichMaker.getMeats(),
    //       "Cheese: ": sandwichMaker.getCheeses(),
    //       "Condiments: ": sandwichMaker.getCondiments(),
    //       "Veggies: ": sandwichMaker.getVeggies()
    //     }

var breadChooser = document.getElementsByName("bread");

for (var i = 0; i < breadChooser.length; i++){
    breadChooser[i].addEventListener("click", function(event){
      if(event.target.checked === true){
        sandwichMaker.addBread(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        console.log("sandwichMaker.getBreadTotal()", sandwichMaker.getBreadTotal());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        console.log("sandwichMaker.getBreads()", sandwichMaker.getBreads());
        bread.innerHTML = `${sandwichMaker.getBreads()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }else{
        sandwichMaker.removeBread(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        bread.innerHTML = `${sandwichMaker.getBreads()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }
    })
}


var meatChooser = document.getElementsByName("meat");

for (var i = 0; i < meatChooser.length; i++){
    meatChooser[i].addEventListener("click", function(event){
      if(event.target.checked === true){
        sandwichMaker.addMeat(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        console.log("sandwichMaker.getMeatTotal()", sandwichMaker.getMeatTotal());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        meat.innerHTML = `${sandwichMaker.getMeats()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }else{
        sandwichMaker.removeMeat(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        meat.innerHTML = `${sandwichMaker.getMeats()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }
    })
}


var cheeseChooser = document.getElementsByName("cheese");

for (var i = 0; i < cheeseChooser.length; i++){
    cheeseChooser[i].addEventListener("click", function(event){
      if(event.target.checked === true){
        sandwichMaker.addCheese(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        console.log("sandwichMaker.getCheeseTotal()", sandwichMaker.getCheeseTotal());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        cheese.innerHTML = `${sandwichMaker.getCheeses()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }else{
        sandwichMaker.removeCheese(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        cheese.innerHTML = `${sandwichMaker.getCheeses()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }
    })
}


var condimentChooser = document.getElementsByName("condiment");

for (var i = 0; i < condimentChooser.length; i++){
    condimentChooser[i].addEventListener("click", function(event){
      if(event.target.checked === true){
        sandwichMaker.addCondiment(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        console.log("sandwichMaker.getCondimentTotal()", sandwichMaker.getCondimentTotal());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        condiments.innerHTML = `${sandwichMaker.getCondiments()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }else{
        sandwichMaker.removeCondiment(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        condiments.innerHTML = `${sandwichMaker.getCondiments()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }
    })
}


var veggieChooser = document.getElementsByName("veggie");

for (var i = 0; i < veggieChooser.length; i++){
    veggieChooser[i].addEventListener("click", function(event){
      if(event.target.checked === true){
        sandwichMaker.addVeggie(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        console.log("sandwichMaker.getVeggieTotal()", sandwichMaker.getVeggieTotal());
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        console.log("finalSandwichPrice", finalSandwichPrice);
        veggies.innerHTML = `${sandwichMaker.getVeggies()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }else{
        sandwichMaker.removeVeggie(event.target.value);
        sandwichMaker.updateToppingSubtotal();
        finalSandwichPrice = sandwichMaker.getTotalPrice();
        veggies.innerHTML = `${sandwichMaker.getVeggies()}`;
        total.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
      }
    })
}

















// Abandoned:
// var inputList = document.querySelectorAll("input");
// console.log("inputList", inputList);
// for (var i=0; i < inputList.length; i++){
//     inputList[i].addEventListener("change",function(event){
//         console.log("event", event.target.value);
//     })
// }