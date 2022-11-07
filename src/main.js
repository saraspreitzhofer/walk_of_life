// import * as THREE from 'three'

let scene
let buttonPet = document.getElementById("pet")
let buttonFeed = document.getElementById("feed")
let buttonDrink = document.getElementById("drink")
let buttonWalk = document.getElementById("walk")
let dog

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
    buttonPet.addEventListener('click', giveWater)
    buttonFeed.addEventListener('click', onButtonFeed)
    buttonDrink.addEventListener('click', onButtonDrink)
    buttonWalk.addEventListener('click', onButtonWalk)
}

function onButtonPet() {
    console.log("button pet")
}

function onButtonFeed() {
    console.log("button feed")
    console.log(dog)
    dog.position.x += 20;
}

function onButtonWalk(){
    console.log("button walk")
}

function onButtonDrink(){
    console.log("Button Drink")
}

init()


let i = 100;
let width;
function move() {
    if (i === 100) {
        i = 99;
        let elem = document.getElementById("myBar");
        width = 100;
        let id = setInterval(frame, 10);
        function frame() {
            if (width <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                width -= 0.25;
                elem.style.width = width + "%";
                if (width % 1 === 0){
                    elem.innerHTML = "Thirst: " + width + "%";
                }
            }
        }
    }
}

move()

function giveWater(){
    if (width < 75){
        width += 25;
    } else {
        width = 100;
    }

}
