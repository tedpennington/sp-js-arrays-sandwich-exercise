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

var breadChooser = document.getElementsByName("bread");

for (var i = 0; i < breadChooser.length; i++){
    breadChooser[i].addEventListener("click", function(event){
    sandwichMaker.addBread(event.target.value);
    sandwichMaker.addTopping(sandwichMaker.getBreadTotal());
    console.log("sandwichMaker.getBreadTotal()", sandwichMaker.getBreadTotal());
    finalSandwichPrice = sandwichMaker.getTotalPrice();
    console.log("finalSandwichPrice", finalSandwichPrice);
    output.innerHTML = `<p>Your total sandwich price is: \$${finalSandwichPrice}</p>`;
    })
}

// var inputList = document.querySelectorAll("input");
// console.log("inputList", inputList);
// for (var i=0; i < inputList.length; i++){
//     inputList[i].addEventListener("change",function(event){
//         console.log("event", event.target.value);
//     })
// }