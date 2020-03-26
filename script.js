const gridContainer = document.querySelector('#gridContainer');
function createGrid(qty = 16){
    for (i=0; i<qty ** 2 ; i++){
        let divContainer = document.createElement('div');
        divContainer.classList.add('divCreated');
        gridContainer.appendChild(divContainer);
    }
}