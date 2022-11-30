// import * as THREE from 'three'

let scene
let buttonPet = document.getElementById("pet")
let buttonFeed = document.getElementById("feed")
let buttonDrink = document.getElementById("drink")
let buttonWalk = document.getElementById("walk")
let dog

let i = 100;
let widthPet;
let widthWalk;
let widthFeed;
let widthDrink;


let barArray = [{
    id: 'petBar',
    i: 100,
    width: 100
}, {
    id: 'walkBar',
    i: 100,
    width: 100
},{
    id: 'thirstBar',
    i: 100,
    width: 100
},{
    id: 'hungerBar',
    i: 100,
    width: 100
},
]


//let dog = document.querySelector("[gltf-model]").object3D

function init() {
    console.log(("hello world"))
    scene = document.getElementsByName("a-scene")
    //if (scene.hasLoaded){
    //dog = document.querySelector("a-asset-item").object3D('mesh')
    /*dog.traverse(node => {
            if (node.name === "Sketchfab_model") {
                console.log("sketchfab loaded")
            }
            if (node.name === "12228_Dog_v1_L2objcleanermaterialmergergles") {
                console.log("12228_Dog_v1_L2objcleanermaterialmergergles loaded")
            }
        }
    )*/
    //}
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

function movePet() {
    for (let x = 0; x < barArray.length; x++){
        if (barArray[x].i === 100) {
            barArray[x].i = 99;
            let elem = document.getElementById(barArray[x].id);
            barArray[x].width = 100;
            let id = setInterval(frame, 10);
            function frame() {
                if (barArray[x].width <= 0) {
                    clearInterval(id);
                    barArray[x].i = 100;
                } else {
                    barArray[x].width -= 0.25;
                    elem.style.width = barArray[x].width + "%";
                    if (barArray[x].width % 1 === 0){
                        elem.innerHTML = "Pet: " + barArray[x].width + "%";
                    }
                }
            }
        }
    }
}
/*
function moveWalk() {
    if (i === 100) {
        i = 99;
        let elem = document.getElementById("walkBar");
        widthWalk = 100;
        let id = setInterval(frame, 10);
        function frame() {
            if (widthWalk <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                widthWalk -= 0.25;
                elem.style.width = widthWalk + "%";
                if (widthWalk % 1 === 0){
                    elem.innerHTML = "Walk: " + widthWalk + "%";
                }
            }
        }
    }
}

function moveHunger() {
    if (i === 100) {
        i = 99;
        let elem = document.getElementById("hungerBar");
        widthFeed = 100;
        let id = setInterval(frame, 10);
        function frame() {
            if (widthFeed <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                widthFeed -= 0.25;
                elem.style.width = widthFeed + "%";
                if (widthFeed % 1 === 0){
                    elem.innerHTML = "Hunger: " + widthFeed + "%";
                }
            }
        }
    }
}

function moveThirst() {
    if (i === 100) {
        i = 99;
        let elem = document.getElementById("thirstBar");
        widthDrink = 100;
        let id = setInterval(frame, 10);
        function frame() {
            if (widthDrink <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                widthDrink -= 0.25;
                elem.style.width = widthDrink + "%";
                if (widthDrink % 1 === 0){
                    elem.innerHTML = "Thirst: " + widthDrink + "%";
                }
            }
        }
    }
}*/

init()

movePet()
//moveWalk()
//moveHunger()
//moveThirst()


