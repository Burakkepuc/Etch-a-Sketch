 let container = document.getElementById('container');
 let cell;

function makeGrid(size){

    container.style.setProperty('--grid-column',size);
    container.style.setProperty('--grid-rows',size);

 for(let i = 0; i < size*size; i++){
         cell = document.createElement('div');
        //cell.innerText=  ;
        container.appendChild(cell);
        cell.classList.add('box');

 };
};

makeGrid(30);


 container.addEventListener("mouseover",(event) => {
     //event.target.classList.add('bg-color');
 });

