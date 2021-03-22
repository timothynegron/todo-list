// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘
// TODO: Put in object.
// let toDoList = {};
// let listNumber = 0;

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

function setEventListeners() {
    document.querySelector("button").addEventListener("click", addTextToList);
}

function addTextToList() {
    let newLi = document.createElement("li");
    newLi.textContent = document.querySelector("input").value;
    newLi.addEventListener("click", liToLineThrough);
    document.querySelector("ul").appendChild(newLi);
    document.querySelector("input").value = "";
}

function liToLineThrough() {
    event.target.style.textDecoration = "line-through";
}