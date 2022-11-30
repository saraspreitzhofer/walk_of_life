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
profilePic.src = "./assets/2d/dog.png"
profilePic.id = "profile_pic"
profilePic.alt = "dog_profile"

profileDiv.appendChild(text)
profileDiv.appendChild(profilePic)

