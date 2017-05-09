console.log("veggies.js loaded");

// IIFE for Veggies

var sandwichMaker = (function(oldSandwichMaker){
    var veggies = [];
    var veggiePrice = {
        "onions": .50,
        "greenPeppers": .50,
        "bananaPeppers": .50,
        "lettuce": .50,
        "tomatoes": .50
    }
    sandwichMaker.addVeggie = function(veggieToAdd){
        veggees.push(veggieToAdd);
    }
    sandwichMaker.getVeggies = function(){
        return veggies;
    }
    sandwichMaker.getVeggiePrices = function(){
        return veggiePrices;
    }
    return oldSandwichMaker;
})(sandwichMaker);