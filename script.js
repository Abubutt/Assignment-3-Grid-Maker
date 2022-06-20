// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

let grid = document.getElementById('grid');

// Add a row
function addR() {
   if(numCols === 0){ 
    let newRow = grid.insertRow(-1);
    let newCell = newRow.insertCell(-1);
    numRows++;
    numCols++;
   }else{ 
        let newRow = grid.insertRow(-1);
            for (var j = 0; j < numCols; j++) {
                newRow.insertCell(j);
            }  
        numRows++;
     }
   }

// Add a column
function addC() {
    if(numRows == 0){
        let newRow = grid.insertRow(-1);
        let newCell = newRow.insertCell(-1);
        let row = document.getElementsByTagName('tr')
        row.innerHTML += document.createElement('td');
        numRows++;
        numCols++;
    }
    else{
        let rows = document.querySelectorAll('tr');
        rows = Array.from(rows);
        rows = rows.slice(1,rows.length);
        rows.forEach((row) => {
            let z = document.createElement("td");
            row.appendChild(z);
        });
        numCols++;
    }
}

// Remove a row
function removeR() {
    grid.deleteRow(1);
}

// Remove a column
function removeC() {
       let rows = document.querySelectorAll('tr');
       rows = Array.from(rows);
       rows = rows.slice(1,rows.length);
       rows.forEach((row) => {
           row.deleteCell(0);
       });
       numCols--;

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}