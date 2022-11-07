
let profileDiv = document.getElementById("profileDiv")
/// let name = document.getElementById("animal_name")
let name = "test"

let text = document.createElement("h1")
let helloText = "Hello " + name + "!"
text.innerText = helloText

let profilePic = document.createElement("img")
profilePic.src = "./assets/2d/dog.png"
profilePic.id = "profile_pic"
profilePic.alt = "dog_profile"

profileDiv.appendChild(text)
profileDiv.appendChild(profilePic)
