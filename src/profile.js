
let profileDiv = document.getElementById("profile")
// let name = document.getElementById("animal_name")
// let name = "test"

let text = document.createElement("h1")
//let helloText = "Hello " + name + "!"
let helloText = "Hello Kevin!"
text.innerText = helloText

let profilePic = document.createElement("img")
profilePic.src = "./assets/2d/dog.png"
profilePic.id = "profile_pic"
profilePic.alt = "dog_profile"

profileDiv.appendChild(text)
profileDiv.appendChild(profilePic)


function submitForm(e){
    //e.preventDefault()
    let name2 = document.getElementById("animal_name")
    console.log(name2)
    //let name = document.getElementById("animal_name").value
    //console.log(name)
    //alert(name)

}
