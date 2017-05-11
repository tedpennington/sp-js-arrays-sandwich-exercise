console.log("veggies.js loaded");

// IIFE for Veggies

var sandwichMaker = (function(oldSandwichMaker){
    var selectedVeggies = [];
    var veggiePrice = {
        onions: .50,
        greenPeppers: .50,
        bananaPeppers: .50,
        lettuce: .50,
        tomatoes: .50
    }
    sandwichMaker.addVeggie = function(veggieToAdd){
        selectedVeggies.push(veggieToAdd);
    }
    sandwichMaker.getVeggies = function(){
        var prettyVeggies = [];
        var veggiesTranslate = {
            onions : " Onions",
            greenPeppers : " Green Peppers",
            bananaPeppers : " Banana Peppers",
            lettuce : " Lettuce",
            tomatoes : " Tomatoes"
        };
        for(i = 0; i < selectedVeggies.length; i++){
            prettyVeggies.push(veggiesTranslate[selectedVeggies[i]]);
        }
        return prettyVeggies;
    }
    sandwichMaker.removeVeggie = function(veggieToRemove){
        selectedVeggies = selectedVeggies.filter(function(e){
            return e !== veggieToRemove;})
    }
    // getVeggieTotal sets a variable to hold running veggie total(veggieTotal), then loops through the selectedVeggies array (which contains all selected veggies from DOM) and adds each element's price (gotten from veggiePrice object which holds the prices).
    sandwichMaker.getVeggieTotal = function(){
        var veggieTotal = 0;
        for(i = 0; i < selectedVeggies.length; i++){
            veggieTotal += veggiePrice[selectedVeggies[i]];
        }
        return veggieTotal;
    }
    return oldSandwichMaker;
})(sandwichMaker);