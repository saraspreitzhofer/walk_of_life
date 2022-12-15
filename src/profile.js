var GET = {};
var queryString = window.location.search.replace(/^\?/, '');
queryString.split(/\&/).forEach(function(keyValuePair) {
    var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
    var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
    GET[paramName] = paramValue;
});

let profileDiv = document.getElementById("profile")

let text = document.createElement("h1")
let helloText = "Hello " + GET["animal_name"] + "!"
text.innerText = helloText

let profilePic = document.createElement("img")
profilePic.id = "profile_pic"
console.log("selected animal: ", GET["animal_type"])
if (GET["animal_type"] === "GermanSheperd"){
    profilePic.src = "./assets/2d/dog.png"
    profilePic.alt = "GermanSheperd_profile"
} else if (GET["animal_type"] === "Schnauzer"){
    profilePic.src = "./assets/2d/dog2.png"
    profilePic.alt = "Schnauzer_profile"
} else if (GET["animal_type"] === "EnglishBulldog"){
    console.log("fish clicked")
    profilePic.src = "assets/2d/dog3.png"
    profilePic.alt = "EnglishBulldog_profile"
} else if (GET["animal_type"] === "none" || !GET["animal_type"]){
    alert("Please select an animal!")
    window.location = "dashboard.html"
}

profileDiv.appendChild(text)
profileDiv.appendChild(profilePic)

