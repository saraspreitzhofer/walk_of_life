var selectedAnimal = "dog"

var animalType = document.createElement("input")
animalType.id="animal_type"
animalType.type="hidden"
animalType.name="animal_type"
animalType.value=selectedAnimal
var controlUnit = document.getElementById("control_unit")
controlUnit.appendChild(animalType)

var EnglishBulldog = {
    element : document.getElementById("EnglishBulldog"),
    clicked : false
};
var GermanSheperd = {
    element: document.getElementById("GermanSheperd"),
    clicked: false
};
var Schnauzer = {
    element : document.getElementById("Schnauzer"),
    clicked: false
};

EnglishBulldog.element.addEventListener("click", function (){
    if(GermanSheperd.clicked === true || Schnauzer.clicked === true){
        GermanSheperd.clicked = false;
        EnglishBulldog.clicked = false
    }
    EnglishBulldog.clicked = true;
    update()
});

GermanSheperd.element.addEventListener("click", function (){
    if(Schnauzer.clicked === true || EnglishBulldog.clicked === true){
        GermanSheperd.clicked = false;
        EnglishBulldog.clicked = false
    }
    GermanSheperd.clicked = true;
    update()
});

Schnauzer.element.addEventListener("click", function (){
    if(GermanSheperd.clicked === true || EnglishBulldog.clicked === true){
        GermanSheperd.clicked = false;
        EnglishBulldog.clicked = false
    }
    Schnauzer.clicked = true;
    update()
});


function update() {
    if(GermanSheperd.clicked === true) {
        clearAll()
        GermanSheperd.element.style.border = "solid 5px #FFFB7D"
        selectedAnimal = "GermanSheperd"
        animalType.value=selectedAnimal
    } else if(EnglishBulldog.clicked === true) {
        clearAll()
        EnglishBulldog.element.style.border = "solid 5px #FFFB7D"
        selectedAnimal = "EnglishBulldog"
        animalType.value=selectedAnimal
    } else if(Schnauzer.clicked === true) {
        clearAll()
        Schnauzer.element.style.border = "solid 5px #FFFB7D"
        selectedAnimal = "Schnauzer"
        animalType.value=selectedAnimal
    }
}

function clearAll(){
    GermanSheperd.element.style.border = "none"
    EnglishBulldog.element.style.border = "none"
    Schnauzer.element.style.border = "none"
}
