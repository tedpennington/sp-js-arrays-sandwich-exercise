console.log("condiments.js loaded");

// IIFE for Condiments

var sandwichMaker = (function(oldSandwichMaker){
    var selectedCondiments = [];
    var condimentPrice = {
        mayo: .50,
        yellowMustard: .50,
        dijonMustard: .50,
        oilAndVinegar: .50,
        meltedChocolate: 2.50
    }
    sandwichMaker.addCondiment = function(condimentToAdd){
        selectedCondiments.push(condimentToAdd);
    }
    sandwichMaker.getCondiments = function(){
        var prettyCondiments = [];
        var condimentsTranslate = {
            mayo : " Mayo",
            yellowMustard : " Yellow Mustard",
            dijonMustard : " Dijon Mustard",
            oilAndVinegar : " Oil and Vinegar",
            meltedChocolate : " Melted Hershey's&reg Chocolate"
        };
        for(i = 0; i < selectedCondiments.length; i++){
            prettyCondiments.push(condimentsTranslate[selectedCondiments[i]]);
        }
        return prettyCondiments;
    }
    sandwichMaker.removeCondiment = function(condimentToRemove){
        selectedCondiments = selectedCondiments.filter(function(e){
            return e !== condimentToRemove;})
    }
    // getCondimentTotal sets a variable to hold running condiment total(condimentTotal), then loops through the selectedCondiments array (which contains all selected condiments from DOM) and adds each element's price (gotten from condimentPrice object which holds the prices).
    sandwichMaker.getCondimentTotal = function(){
        var condimentTotal = 0;
        for(i = 0; i < selectedCondiments.length; i++){
            condimentTotal += condimentPrice[selectedCondiments[i]];
        }
        return condimentTotal;
    }
    return oldSandwichMaker;
})(sandwichMaker);