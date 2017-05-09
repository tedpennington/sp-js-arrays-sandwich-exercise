console.log("condiments.js loaded");

// IIFE for Condiments

var sandwichMaker = (function(oldSandwichMaker){
    var condiments = [];
    var condimentPrice = {
        "mayo": .50,
        "yellowMustard": .50,
        "dijonMustard": .50,
        "oilAndVinegar": .50,
        "meltedChocolate": 2.50
    }
    sandwichMaker.addCondiment = function(condimentToAdd){
        condiments.push(condimentToAdd);
    }
    sandwichMaker.getCondiment = function(){
        return condiments;
    }
    sandwichMaker.getCondimentPrices = function(){
        return condimentPrices;
    }
    return oldSandwichMaker;
})(sandwichMaker);