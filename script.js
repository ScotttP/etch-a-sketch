const gridContainer = document.querySelector('#gridContainer');
const divCreate = document.getElementsByClassName('divCreated');

function defaultGrid (quantity=16) { //default grid to 16x16 function
    for(i= 0; i < quantity ** 2; i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('divCreated');
            newDiv.id = i;
            gridContainer.appendChild(newDiv);
    }
    document.documentElement.style.setProperty('--quantity',quantity);
}
defaultGrid();


function randomColor (cName) { // fills in random color once hovered over divs
    hoverColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(cName).style.background = hoverColor;
}

function clearGrid () { // reset the grid to white 

}

function customGrid () {// prompts user to enter grid quantity between 2-64

}




