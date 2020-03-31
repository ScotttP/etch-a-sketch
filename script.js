const gridContainer = document.querySelector('#gridContainer');
const divCreated = document.getElementsByClassName('divCreated');

const customButton = document.querySelector('#custom');
customButton.addEventListener ('click', function() {
    customGrid();
});

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click',function(){
    clearGrid ();
});


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

function customGrid () {// prompts user to enter grid quantity between 2-64

}


function defaultColor () {
    const divColor = document.querySelectorAll('.divCreated');
        divColor.forEach(divCreated => {
        divCreated.addEventListener('mouseover', () =>{
        divCreated.style.backgroundColor = "black";
        });
    }); 
}
defaultColor();

function randomColor () { // fills in random color once hovered over divs removes default color
    Math.floor(Math.random()*16777215).toString(16);
   
}


function clearGrid () { // clearButton variable activates this function when button is clicked
    const clearDivs = document.querySelectorAll('.divCreated');
    clearDivs.forEach(function (divCreated) {
        divCreated.style.backgroundColor = "white";
    });
   
}








