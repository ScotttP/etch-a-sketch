const gridContainer = document.querySelector('#gridContainer');
const divCreated = document.getElementsByClassName('divCreated');
const header = document.getElementsByClassName('header');
const custom = document.querySelector('custom');
const clear = document.querySelector('clear');

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

document.querySelectorAll('.divCreated').forEach(divColor => {
 divColor.addEventListener('mouseover', defaultColor )
}); 

function defaultColor (divColor) {
    divColor.style.backgroundColor="red";
}

function randomColor () { // fills in random color once hovered over divs removes default color

}


function clearGrid () { // reset the grid to white 

}

function customGrid () {// prompts user to enter grid quantity between 2-64



}




