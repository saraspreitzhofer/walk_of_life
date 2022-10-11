import {GLTFLoader} from '../lib/three.js-master/examples/jsm/loaders/GLTFLoader.js'

class Dog{
    constructor(scene) {
        this.dog
        this.scene = scene
        console.log("dog has been created")
        this.loadModel()
    }

    loadModel(){
        const loader = new GLTFLoader();
        loader.load(
            './assets/3d/dog.glb',
            ( gltf ) => {
                gltf.scene.scale.x = 0.01
                gltf.scene.scale.y = 0.01
                gltf.scene.scale.z = 0.01
                gltf.scene.position.x = 2
                gltf.scene.position.y = -1
                gltf.scene.position.z = 1
                gltf.scene.rotation.x = 180
                gltf.scene.rotation.z = 270
                this.scene.add( gltf.scene )
                this.dog = gltf.scene

            },
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
    }

    animate(){
        // console.log("dog animated")
        if (this.dog){

        }
    }
}

export {Dog}
