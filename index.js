// Remove the DOM node with id="main"
let mainNode = document.querySelector("main#main");
if (mainNode) {
  mainNode.remove();
}

// Create a new <h1> node and assign it to a variable "newHeader"
let newHeader = document.createElement("h1");

// Set the id of newHeader to "victory"
newHeader.id = "victory";

// Add text inside newHeader
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append newHeader to the body
document.body.appendChild(newHeader);
// Write your code here!