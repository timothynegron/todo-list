// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘
let toDoList = [];

// ┌──────────────────┐
// │   Main Program   │	
// └──────────────────┘
main();

function main(){
    setEventListeners();
}


// ┌───────────────┐
// │   Functions   │	
// └───────────────┘


//  CASE: User enters text to put on the list --> store in array
//        User enters another text to put on the list again
//        Store into an array using push
//        Update the list
//
//  CASE: Clear list
//  
//

function setEventListeners() {
    document.querySelector("button").addEventListener("click", addTextToList);
}

// Temporary
function addTextToList() {
    let newLi = document.createElement("p");
    console.log(newLi);
    newLi.textContent = document.querySelector("input").value;
    console.log(newLi);
    newLi.addEventListener("click", liToLineThrough);
    document.querySelector("#todo-list").appendChild(newLi);
    document.querySelector("input").value = "";
}

function liToLineThrough() {
    event.target.style.textDecoration = "line-through";
}

function clearList() {
    // Empty Array
    toDoList = [];

    // Update the display
    updateListDisplay();
}

function addToList() {
    //toDoList = 
}

function updateListDisplay() {

}