console.log("cheese.js loaded");

// IIFE for Cheese

var sandwichMaker = (function(oldSandwichMaker){
    var selectedCheeses = [];
    var cheesePrice = {
        american: 1.00,
        cheddar: 1.00,
        provolone: 1.00,
        swiss: 1.00,
        velveta: .50
    }
    sandwichMaker.addCheese = function(cheeseToAdd){
        selectedCheeses.push(cheeseToAdd);
    }
    sandwichMaker.getCheeses = function(){
        var prettyCheeses = [];
        var cheesesTranslate = {
            american : " American",
            cheddar : " Cheddar",
            provolone : " Provolone",
            swiss : " Swiss",
            velveta : " Velveta&reg;"
        };
        for(i = 0; i < selectedCheeses.length; i++){
            prettyCheeses.push(cheesesTranslate[selectedCheeses[i]]);
        }
        return prettyCheeses;
    }
    sandwichMaker.removeCheese = function(cheeseToRemove){
        selectedCheeses = selectedCheeses.filter(function(e){
            return e !== cheeseToRemove;})
    }
    // getCheeseTotal sets a variable to hold running cheese total(cheeseTotal), then loops through the selectedCheeses array (which contains all selected cheeses from DOM) and adds each element's price (gotten from cheesePrice object which holds the prices).
    sandwichMaker.getCheeseTotal = function(){
        var cheeseTotal = 0;
        for(i = 0; i < selectedCheeses.length; i++){
            cheeseTotal += cheesePrice[selectedCheeses[i]];
        }
        return cheeseTotal;
    }
    return oldSandwichMaker;
})(sandwichMaker);