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
    document.querySelector("ul").appendChild(newLi);
}
