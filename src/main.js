// import * as THREE from 'three'

let scene
let buttonPet = document.getElementById("pet")
let buttonFeed = document.getElementById("feed")
let dog

//let dog = document.querySelector("[gltf-model]").object3D

function init() {
    console.log(("hello world"))
    scene = document.getElementsByName("a-scene")
    //if (scene.hasLoaded){
    dog = document.querySelector("a-asset-item").object3D('mesh')
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
    buttonFeed.addEventListener('click', onButtonFeed)
}

function onButtonPet() {
    console.log("button pet")
}

function onButtonFeed() {
    console.log("button feed")
    console.log(dog)
    dog.position.x += 20;
}

init()


AFRAME.registerComponent('modify-materials', {
    init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            console.log("model loaded")
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                if (node.name.indexOf('ship') !== -1) {
                    node.material.color.set('red');
                }
            });
        });
    }
});
