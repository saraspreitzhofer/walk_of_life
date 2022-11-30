let scene
let buttonPet = document.getElementById("pet")
let buttonFeed = document.getElementById("feed")
let buttonDrink = document.getElementById("drink")
let buttonWalk = document.getElementById("walk")


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
    if (barArray[0].width < 75){
        barArray[0].width += 25;
    } else {
        barArray[0].width = 100;
    }
}

function onButtonWalk(){
    console.log("button walk")
    if (barArray[1].width < 75){
        barArray[1].width += 25;
    } else {
        barArray[1].width = 100;
    }
}

function onButtonFeed() {
    console.log("button feed")
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
            barArray[x].i = 99;             // wtf is this line btw
            let elem = document.getElementById(barArray[x].id);
            barArray[x].width = 100;
            let id = setInterval(frame, 10);
            function frame() {
                if (barArray[x].width <= 0) {
                    clearInterval(id);
                    barArray[x].i = 100;
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


