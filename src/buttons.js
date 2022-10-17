    /*class Buttons {

        feedbackText(){
            let text = document.createElement("p");
            text.innerHTML = "Thanks for feeding me :)"
            let scene = document.getElementById("scene");
            scene.appendChild(text);

        }

        build(){
            let feed = document.getElementById("feed");
            feed.addEventListener("click", this.feedbackText)
            console.log(feed);
        }

        //let button = document.getElementById("feed").addEventListener("onC")
    }*/

    function feedbackText(){
        console.log("hier")
        let text = document.getElementById("paragraph");
        text.innerHTML = "Thanks for feeding me :)";
        //document.getElementById("paragraph").innerHTML = "Thanks for feeding me :)";
        //text.innerText = "Thanks for feeding me :)"
        let scene = document.querySelector('a-scene');
        console.log(scene)
        /*if (scene.hasLoaded) {
            scene.appendChild(text);
            console.log("Yay food")
        }*/

    }

    function build(){
        let feed = document.getElementById("feed");
        feed.addEventListener("click", feedbackText)
        console.log(feed);
    }

    build()
    //const buttons = new Buttons();
    //buttons.build()
