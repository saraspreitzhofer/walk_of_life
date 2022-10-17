    class Buttons {

        /*feedbackText(){
            let text = document.createElement("p");
            text.innerHTML = "Thanks for feeding me :)"
            let scene = document.getElementById("scene");
            scene.appendChild(text);

        }

        build(){
            let feed = document.getElementById("feed");
            feed.addEventListener("click", this.feedbackText)
            console.log(feed);
        }*/

        //let button = document.getElementById("feed").addEventListener("onC")
    }

    function feedbackText(){
        let text = document.createElement("p");
        text.innerHTML = "Thanks for feeding me :)"
        let scene = document.getElementById("scene");
        scene.appendChild(text);
        console.log("Yay food")

    }

    function build(){
        let feed = document.getElementById("feed");
        feed.addEventListener("click", feedbackText)
        console.log(feed);
    }

    //const buttons = new Buttons();
    //buttons.build()
