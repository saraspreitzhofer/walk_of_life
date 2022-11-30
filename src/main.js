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

function onButtonPet(){
    console.log("button pet")
    if (widthPet < 75){
        widthPet += 25;
    } else {
        widthPet = 100;
    }
}

function onButtonWalk(){
    console.log("button walk")
    if (widthWalk < 75){
        widthWalk += 25;
    } else {
        widthWalk = 100;
    }
}

function onButtonFeed() {
    console.log("button feed")
    //console.log(dog)
    //dog.position.x += 20;
    if (widthFeed < 75){
        widthFeed += 25;
    } else {
        widthFeed = 100;
    }
}

function onButtonDrink(){
    console.log("button drink")
    if (widthDrink < 75){
        widthDrink += 25;
    } else {
        widthDrink = 100;
    }

}

function movePet() {
    if (i === 100) {
        i = 99;
        let elem = document.getElementById("petBar");
        widthPet = 100;
        let id = setInterval(frame, 10);
        function frame() {
            if (widthPet <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                widthPet -= 0.25;
                elem.style.width = widthPet + "%";
                if (widthPet % 1 === 0){
                    elem.innerHTML = "Pet: " + widthPet + "%";
                }
            }
        }
    }
}

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
}

init()

movePet()
moveWalk()
moveHunger()
moveThirst()


