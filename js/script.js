//IPO - Input - Process - Output 

//Declare constants and variables (State)
let year; 
//Select and cache DOM element references
const yearEl = document.getElementById("year"); 
//Initialize event listeners

//Define application functions 

//Run the function as soon as the page loads
init(); 

function init() {
    year = new Date().getFullYear(); 
    yearEl.innerText = year; 
}