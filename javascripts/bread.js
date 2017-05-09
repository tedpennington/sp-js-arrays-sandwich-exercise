console.log("bread.js loaded");

// IIFE for Bread:

var sandwichMaker = (function(oldSandwichMaker){
    var selectedBreads = [];
    var breadPrice = {
        "white": .50,
        "wheat": .50,
        "honeyOat": .50,
        "rye": .50,
        "bowl": .01
    }
    sandwichMaker.addBread = function(breadToAdd){
        selectedBreads.push(breadToAdd);
    }
    // getBreadTotal sets a variable to hold running bread total(breadTotal), then loops through the selectedBreads array (which contains all selected breads from DOM) and adds each element's price (gotten from breadPrice object which holds the prices).
    sandwichMaker.getBreadTotal = function(){
        var breadTotal = 0;
        for(i = 0; i < selectedBreads.length; i++){
            breadTotal += breadPrice[selectedBreads[i]];
        }
        return breadTotal;
    }
    return oldSandwichMaker;
})(sandwichMaker);