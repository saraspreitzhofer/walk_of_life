let scene
let buttonPet = document.getElementById("pet")
let buttonFeed = document.getElementById("feed")
let buttonDrink = document.getElementById("drink")
let buttonWalk = document.getElementById("walk")
let sceneEl = document.querySelector('a-scene')
let entity = sceneEl.querySelector('a-entity').object3D
let gameEnded = document.getElementById('gamemessage')
let gameEndedButton = document.getElementById("gameEndedButton")

var GET = {};
var queryString = window.location.search.replace(/^\?/, '');
queryString.split(/\&/).forEach(function(keyValuePair) {
    var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
    var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
    GET[paramName] = paramValue;
});

gameEnded.style.display = "none"

console.log(entity.children)

//To access the right 3d model --> not tested pray for me (in case the models get loaded in a different order idk)
if(GET["animal_type"] === "GermanSheperd") {
    entity.children.pop()
    entity.children.pop()
} else if (GET["animal_type"] === "Schnauzer") {
    entity.children.shift()
    entity.children.shift()
} else {
    entity.children.pop()
    entity.children.shift()
}
let model = entity.children[0]

/**
 * Array that contains information and state of all progress bars
 */
let barArray = [{
    id: 'petBar',
    i: 100,
    width: 100,
    text: 'Pet: '
}, {
    id: 'walkBar',
    i: 100,
    width: 100,
    text: 'Lulu: '
}, {
    id: 'thirstBar',
    i: 100,
    width: 100,
    text: 'Thirst: '
}, {
    id: 'hungerBar',
    i: 100,
    width: 100,
    text: 'Hunger: '
}
]


/**
 * Initialize scene and buttons
 */
function init() {
    scene = document.getElementsByName("a-scene")
    buttonPet.addEventListener('click', onButtonPet)
    buttonWalk.addEventListener('click', onButtonWalk)
    buttonFeed.addEventListener('click', onButtonFeed)
    buttonDrink.addEventListener('click', onButtonDrink)
}


// hardcoded array positions lmao fight me
function onButtonPet(){
    console.log("button pet")
    model.el.components.animation__pet.beginAnimation()
    if (barArray[0].width < 75){
        barArray[0].width += 25;
    } else {
        barArray[0].width = 100;
    }
}

function onButtonWalk(){
    console.log("button walk")
    model.el.components.animation__walk.beginAnimation()
    if (barArray[1].width < 75){
        barArray[1].width += 25;
    } else {
        barArray[1].width = 100;
    }
}

function onButtonFeed() {
    console.log("button feed")
    //TODO: How to start foodButtonPressed animation from index.html --> https://aframe.io/docs/1.3.0/components/animation.html#sidebar
    console.log(model)
    model.el.components.animation__food.beginAnimation()
    if (barArray[3].width < 75){
        barArray[3].width += 25;
    } else {
        barArray[3].width = 100;
    }
}

function onButtonDrink(){
    console.log("button drink")
    if (barArray[2].width < 75){
        barArray[2].width += 25;
    } else {
        barArray[2].width = 100;
    }
}

function checkIfAnimalIsDead(){
    if(barArray[0].width < 1 && barArray[1].width < 1 && barArray[2].width < 1  && barArray[3].width < 1){
        animalIsDead()
    }
}

gameEndedButton.addEventListener('click', function() {
    window.location = "dashboard.html"
})

function animalIsDead(){
    gameEnded.style.display = "block"
}

/**
 * Iterate over barArray, update values for each one separately.
 *
 * Btw, der speed hängt mit dem id value zusammen, wenn man das timeout raufsetzt
 * glaube ich dass man den speed weiter reduzieren kann. Didn't test though so good luck
 *
 */
function movePet() {
    for (let x = 0; x < barArray.length; x++){
        if (barArray[x].i === 100) {
            barArray[x].i = 99;      // wtf is this line btw
            let elem = document.getElementById(barArray[x].id);
            barArray[x].width = 100;
            let id = setInterval(frame, 10);
            function frame() {
                if (barArray[x].width <= 0) {
                    clearInterval(id);
                    barArray[x].i = 100;
                    checkIfAnimalIsDead()
                } else {
                    barArray[x].width -= 0.125;   // change this to change speed
                    elem.style.width = barArray[x].width + "%";
                    if (barArray[x].width % 1 === 0){
                        elem.innerHTML = barArray[x].text + barArray[x].width + "%";
                    }
                }
            }
        }
    }
}

init()
movePet()


