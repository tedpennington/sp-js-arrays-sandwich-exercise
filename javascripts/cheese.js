console.log("cheese.js loaded");

// IIFE for Cheese

var sandwichMaker = (function(oldSandwichMaker){
    var cheeses = [];
    var cheesePrice = {
        "american": 1.00,
        "cheddar": 1.00,
        "provolone": 1.00,
        "swiss": 1.00,
        "velveta": .50
    }
    sandwichMaker.addCheese = function(cheeseToAdd){
        cheeses.push(cheeseToAdd);
    }
    sandwichMaker.getCheeses = function(){
        return cheeses;
    }
    sandwichMaker.getCheesePrices = function(){
        return meatPrices;
    }
    return oldSandwichMaker;
})(sandwichMaker);