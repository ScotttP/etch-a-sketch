const gridContainer = document.querySelector('#gridContainer');

function createDiv(quantity){
    for(i= 0; i < quantity** 2;i++){
        const divCreated = document.createElement('div');
        divCreated.classList.add('divCreated');
        divCreated.id = i;
        gridContainer.appendChild(divCreated);
}
}


