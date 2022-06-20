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
	newCell.style.backgroundColor = "White";
	newCell.onclick = function() {
		newCell.style.backgroundColor = colorSelected;
	}
    numRows++;
    numCols++;
   }else{ 
        let newRow = grid.insertRow(-1);
            for (var j = 0; j < numCols; j++) {
                let newCell = newRow.insertCell(j);
				newCell.style.backgroundColor = "White"
				newCell.onclick = function() {
					newCell.style.backgroundColor = colorSelected;
				}
            }  
        numRows++;
     }
   }

// Add a column
function addC() {
    if(numRows == 0){
        let newRow = grid.insertRow(-1);
        let newCell = newRow.insertCell(-1);
		newCell.style.backgroundColor = "White"
		newCell.onclick = function() {
			newCell.style.backgroundColor = colorSelected;
		}
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
			z.style.backgroundColor = "White"
			z.onclick = function() {
				z.style.backgroundColor = colorSelected;
			}
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
    for(let i = 1; i <= numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let currCell = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            if(currCell.style.backgroundColor === "white") {
                currCell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    for(let i = 1; i <= numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let currCell = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            currCell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
   for(let i = 1; i <= numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let currCell = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            currCell.style.backgroundColor = "white";
        }
    }
}