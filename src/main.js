// import * as THREE from 'three'

let scene
let buttonPet = document.getElementById("pet")
let buttonFeed = document.getElementById("feed")

function init(){
    console.log(("hello world"))
    scene = document.getElementsByName("a-scene")

    buttonPet.addEventListener('click', onButtonPet)
    buttonFeed.addEventListener('click', onButtonFeed)
}

function onButtonPet(){
    console.log("button pet")
}
function onButtonFeed(){
    console.log("button feed")
}

init()
