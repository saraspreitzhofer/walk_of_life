var fish = {
    element : document.getElementById("fish"),
    clicked : false
};
var dog = {
    element: document.getElementById("dog"),
    clicked: false
};
var elefant = {
    element : document.getElementById("elefant"),
    clicked: false
};

fish.element.addEventListener("click", function (){
    if(dog.clicked === true || elefant.clicked === true){
        dog.clicked = false;
        fish.clicked = false
    }
    fish.clicked = true;
    update()
});

dog.element.addEventListener("click", function (){
    if(elefant.clicked === true || fish.clicked === true){
        dog.clicked = false;
        fish.clicked = false
    }
    dog.clicked = true;
    update()
});

elefant.element.addEventListener("click", function (){
    if(dog.clicked === true || fish.clicked === true){
        dog.clicked = false;
        fish.clicked = false
    }
    elefant.clicked = true;
    update()
});


function update() {
    if(dog.clicked === true) {
        clearAll()
        dog.element.style.border = "solid 5px #FFFB7D"
    } else if(fish.clicked === true) {
        clearAll()
        fish.element.style.border = "solid 5px #FFFB7D"
    } else if(elefant.clicked === true) {
        clearAll()
        elefant.element.style.border = "solid 5px #FFFB7D"
    }
}

function clearAll(){
    dog.element.style.border = "none"
    fish.element.style.border = "none"
    elefant.element.style.border = "none"
}
