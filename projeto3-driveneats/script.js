let cont = 0;
let aux = "";
let nam = ["", "", "", "TOTAL"];
let val = [0, 0, 0, 0];
let address = ["", ""];

document.querySelector(".checklists div:nth-child(4) p:first-child").innerHTML = nam[3];

function selectMainMeal(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(2) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        document.querySelector(".menu:nth-child(2) .selected .ion").classList.add("hidden");
        selectedMeal.classList.remove("selected");
        cont--;
    }
    if(selectedMeal === meal){
        cont--;
    }
    meal.classList.add("selected");
    document.querySelector(".menu:nth-child(2) .selected .ion").classList.remove("hidden");
    cont++;

    if(cont == 3){
    document.querySelector(".button-confirm").classList.remove("hidden");
    document.querySelector(".button-box").classList.add("hidden");
    }

    nam[0] = document.querySelector(".menu:nth-child(2) .selected > p:nth-child(2)").innerHTML;
    aux = document.querySelector(".menu:nth-child(2) .selected > p:last-child").innerHTML;
    console.log(nam[0]);
    console.log(Number(aux));
    val[0] = Number(aux);
    val[3] = val[0] + val[1] + val[2];
    document.querySelector(".checklists div:nth-child(1) p:first-child").innerHTML = nam[0];
    document.querySelector(".checklists div:nth-child(1) p:last-child").innerHTML = val[0].toFixed(2);
    document.querySelector(".checklists div:nth-child(4) p:last-child").innerHTML = `R$ ${val[3].toFixed(2)}`;
}


function selectDrink(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(4) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        document.querySelector(".menu:nth-child(4) .selected .ion").classList.add("hidden");
        selectedMeal.classList.remove("selected");
        cont--;
    }
    if(selectedMeal === meal){
        cont--;
    }
    meal.classList.add("selected");
    document.querySelector(".menu:nth-child(4) .selected .ion").classList.remove("hidden");
    cont++;

    if(cont == 3){
    document.querySelector(".button-confirm").classList.remove("hidden");
    document.querySelector(".button-box").classList.add("hidden");
    }

    nam[1] = document.querySelector(".menu:nth-child(4) .selected > p:nth-child(2)").innerHTML;
    aux = document.querySelector(".menu:nth-child(4) .selected > p:last-child").innerHTML;
    console.log(nam[1]);
    console.log(Number(aux));
    val[1] = Number(aux);
    val[3] = val[0] + val[1] + val[2];
    document.querySelector(".checklists div:nth-child(2) p:first-child").innerHTML = nam[1];
    document.querySelector(".checklists div:nth-child(2) p:last-child").innerHTML = val[1].toFixed(2);
    document.querySelector(".checklists div:nth-child(4) p:last-child").innerHTML = `R$ ${val[3].toFixed(2)}`;
}

function selectDessert(meal){
    const selectedMeal = document.querySelector(".menu:nth-child(6) .selected");
    if(selectedMeal !== null && selectedMeal !== meal){
        document.querySelector(".menu:nth-child(6) .selected .ion").classList.add("hidden");
        selectedMeal.classList.remove("selected");
        cont--;
    }
    if(selectedMeal === meal){
        cont--;
    }
    meal.classList.add("selected");
    document.querySelector(".menu:nth-child(6) .selected .ion").classList.remove("hidden");
    cont++;

    if(cont == 3){
    document.querySelector(".button-confirm").classList.remove("hidden");
    document.querySelector(".button-box").classList.add("hidden");
    } 

    nam[2] = document.querySelector(".menu:nth-child(6) .selected > p:nth-child(2)").innerHTML;
    aux = document.querySelector(".menu:nth-child(6) .selected > p:last-child").innerHTML;
    console.log(nam[2]);
    console.log(Number(aux));
    val[2] = Number(aux);
    val[3] = val[0] + val[1] + val[2];
    document.querySelector(".checklists div:nth-child(3) p:first-child").innerHTML = nam[2];
    document.querySelector(".checklists div:nth-child(3) p:last-child").innerHTML = val[2].toFixed(2);
    document.querySelector(".checklists div:nth-child(4) p:last-child").innerHTML = `R$ ${val[3].toFixed(2)}`;
}

function confirmOrder(){
    document.querySelector(".superbackground").classList.remove("hidden");
}

function getAddress(){
    address[0] = prompt("Qual o seu nome?");
    address[1] = prompt("Qual o seu endereço?");
}

function sendOrder(){
    let uri = "";
    uri = "Olá, gostaria de fazer o pedido:\n- Prato: "+nam[0]+"\n- Bebida: "+nam[1]+"\n- Sobremesa: "+nam[2]+"\nTotal: R$ "+ val[3].toFixed(2)+"\n\nNome: "+address[0]+"\nEndereço: "+address[1];
    console.log("https://wa.me/5584999309150?text="+encodeURIComponent(uri));
    document.querySelector("a").href = "https://wa.me/5584999309150?text="+encodeURIComponent(uri);
}