let cont = 0;


function selectMainMeal(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(2) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        selectedMeal.classList.remove("selected");
        cont--;
    }
    if(selectedMeal === meal){
        cont--;
    }
    meal.classList.add("selected");
    cont++;

    if(cont == 3){
    document.querySelector(".button-confirm").classList.remove("hidden");
    document.querySelector(".button-box").classList.add("hidden");
    }
}


function selectDrink(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(4) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        selectedMeal.classList.remove("selected");
        cont--;
    }
    if(selectedMeal === meal){
        cont--;
    }
    meal.classList.add("selected");
    cont++;

    if(cont == 3){
    document.querySelector(".button-confirm").classList.remove("hidden");
    document.querySelector(".button-box").classList.add("hidden");
    }
}

function selectDessert(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(6) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        selectedMeal.classList.remove("selected");
        cont--;
    }
    if(selectedMeal === meal){
        cont--;
    }
    meal.classList.add("selected");
    cont++;

    if(cont == 3){
    document.querySelector(".button-confirm").classList.remove("hidden");
    document.querySelector(".button-box").classList.add("hidden");
    } 
}
