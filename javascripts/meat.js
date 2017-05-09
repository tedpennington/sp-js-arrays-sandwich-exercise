console.log("meat.js loaded");

// IIFE for meat

var sandwichMaker = (function(oldSandwichMaker){
    var meats = [];
    var meatPrice = {
        "ham": 2.00,
        "turkey": 2.00,
        "roastBeef": 2.00,
        "salami": 2.00,
        "spam": .50
    }
    sandwichMaker.addMeat = function(meatToAdd){
        meats.push(meatToAdd);
    }
    sandwichMaker.getMeats = function(){
        return meats;
    }
    sandwichMaker.getmeatPrices = function(){
        return meatPrices;
    }
    return oldSandwichMaker;
})(sandwichMaker);