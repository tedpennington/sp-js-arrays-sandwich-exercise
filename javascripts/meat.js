console.log("meat.js loaded");

// IIFE for meat

var sandwichMaker = (function(oldSandwichMaker){
    var selectedMeats = [];
    var meatPrice = {
        ham: 2.00,
        turkey: 2.00,
        roastBeef: 2.00,
        salami: 2.00,
        spam: .50
    }
    sandwichMaker.addMeat = function(meatToAdd){
        selectedMeats.push(meatToAdd);
    }
    sandwichMaker.getMeats = function(){
        var prettyMeats = [];
        var meatsTranslate = {
            ham : " Ham",
            turkey : " Turkey",
            roastBeef : " Roast Beef",
            salami : " Salami",
            spam : " Spam"
        };
        for(i = 0; i < selectedMeats.length; i++){
            prettyMeats.push(meatsTranslate[selectedMeats[i]]);
        }
        return prettyMeats;
    }
    sandwichMaker.removeMeat = function(meatToRemove){
        selectedMeats = selectedMeats.filter(function(e){
            return e !== meatToRemove;})
    }
    // getMeatTotal sets a variable to hold running meat total(meatTotal), then loops through the selectedMeats array (which contains all selected meats from DOM) and adds each element's price (gotten from meatPrice object which holds the prices).
    sandwichMaker.getMeatTotal = function(){
        var meatTotal = 0;
        for(i = 0; i < selectedMeats.length; i++){
            meatTotal += meatPrice[selectedMeats[i]];
        }
        return meatTotal;
    }
    return oldSandwichMaker;
})(sandwichMaker);