// https://aframe.io/docs/1.3.0/introduction/entity-component-system.html
// https://aframe.io/docs/1.3.0/introduction/writing-a-component.html

AFRAME.registerComponent('hello-world', {
    /*schema: {
        message: {type: 'string', default: 'hello world'},
        message2: {type: 'string', default: ''}
    },*/
    init: function () {
        let button = document.getElementById("pet");
        button.addEventListener("click", console.log("clicked"));
    }
});
