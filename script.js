const gridContainer = document.querySelector('#gridContainer');
const divCreate = document.getElementsByClassName('divCreated');

function defaultGrid (quantity=16) {
    for(i= 0; i < quantity ** 2; i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('divCreated');
            newDiv.id = i;
            gridContainer.appendChild(newDiv);
    }
    document.documentElement.style.setProperty('--quantity',quantity)
}

document.getmyElementbyClassName('divCreated').innerHTML= defaultGrid(quantity=16);





 