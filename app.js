let container = document.querySelector('.container');
let size  = 400;

function createGrid(gridSize=16){
    for(let num = 0; num < gridSize ** 2;num++){
        let pixel = document.createElement('div');
        pixel.style.height = `${(size / gridSize) - 2}px`
        pixel.style.width = `${(size / gridSize) - 2}px`
        pixel.classList.add('box');
        pixel.addEventListener('mouseover',changeGridColor)
        container.appendChild(pixel);
    };
}

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click',handleResetBtn);

createGrid();

function handleResetBtn(){
    let gridNum = +prompt("Enter the grid size",16);
    if (gridNum > 40){
        alert("Grid Size cannot be greater than 40 😕")
    }else{
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
        createGrid(gridNum)

    }
}

function changeGridColor(e){
    e.target.setAttribute('id','colorIt')
}