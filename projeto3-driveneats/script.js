function selectMainMeal(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(2) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        selectedMeal.classList.remove("selected");
    }
    meal.classList.toggle("selected");
}


function selectDrink(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(4) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        selectedMeal.classList.remove("selected");
    }
    meal.classList.toggle("selected");
}

function selectDessert(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(6) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        selectedMeal.classList.remove("selected");
    }
    meal.classList.toggle("selected");
}
