var GET = {};
var queryString = window.location.search.replace(/^\?/, '');
queryString.split(/\&/).forEach(function(keyValuePair) {
    var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
    var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
    GET[paramName] = paramValue;
});

let profileDiv = document.getElementById("profile")
// let name = document.getElementById("animal_name")
// let name = "test"

let text = document.createElement("h1")
//let helloText = "Hello " + name + "!"
let helloText = "Hello " + GET["animal_name"] + "!"
text.innerText = helloText

let profilePic = document.createElement("img")
profilePic.id = "profile_pic"
console.log("selected animal: ", GET["animal_type"])
if (GET["animal_type"] === "dog"){
    profilePic.src = "./assets/2d/dog.png"
    profilePic.alt = "dog_profile"
}
else if (GET["animal_type"] === "elefant"){
    profilePic.src = "./assets/2d/elefant.jpg"
    profilePic.alt = "elefant_profile"
}
else if (GET["animal_type"] === "fish"){
    console.log("fish clicked")
    profilePic.src = "assets/2d/fisch.jpg"
    profilePic.alt = "fish_profile"
}

profileDiv.appendChild(text)
profileDiv.appendChild(profilePic)

