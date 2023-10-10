//input field and button need to become vars aka IDs 9-18

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateInput = document.getElementById("date_input");

function setUp(){
    if(inputBox.value === ''){ //blank submission
        alert("No text has been submitted. Please try again");
    }
    else{
        let li = document.createElement("li");  //stores to li
        li.innerText = inputBox.value + " - " + dateInput.value; //html text gets stored + DATE
        listContainer.appendChild(li); //display
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //unicode - creates an X icon (deleting)
        li.appendChild(span); //displays X
    }
    inputBox.value = "";
    saveData();
}  //found near submit button

listContainer.addEventListener("click", function(e){ //checks and unchecks to make sure it has a cut through it and is selected
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); 
} 

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    
}

showTask();

function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }