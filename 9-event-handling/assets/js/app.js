//Start our 'application' after the page has been loaded
window.addEventListener("load", init);

/**
 * Function called after document is loaded
 *
 * @param e Load event (we won't use it, but keep in mind: a event -always- passes a parameter with information!)
 */
function init(e) {
    assignmentOne();
}

// 1. Create a form with one text input element and a button. Via JavaSript, read the value of the input element and log it to the console.


function assignmentOne(){
    let sbmButton = document.getElementById("submit");
    sbmButton.addEventListener("click", clickFormHandler);

}

function clickFormHandler(event){
    event.preventDefault();
    let nameInput = document.getElementById('myName').value;
    if(nameInput != ""){
        console.log("The input is:", nameInput);
        writeToTheDom(nameInput);
    }
}

// 2. In addition to 1, write a function that writes the content of the input element to the DOM as a list item of an unordered list.
function writeToTheDom(name){
    let ref = document.getElementById("result");
    let li = document.createElement("li");
    li.innerHTML = name;
    ref.append(li);
}