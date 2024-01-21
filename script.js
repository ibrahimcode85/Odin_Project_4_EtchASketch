// set the initial n for 'n x n' grid
const nth_grid = 100;
let n_grid = 10;

// create big container
let containerGrid = document.createElement('div');
containerGrid.setAttribute('class', 'containerGrid');

for (let nRow = 1; nRow <= nth_grid; nRow++){
    
    let containerRow = document.createElement('div');
    containerRow.setAttribute('class','containerRow');
   
    //add grid to the row container
    for (let nGrid = 1; nGrid <= nth_grid; nGrid++){
        
        let gridText = `grid_${nRow}-${nGrid}`;
        let grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        grid.setAttribute('id', gridText);
        containerRow.appendChild(grid);
    }

    //append to main container
    containerGrid.appendChild(containerRow); 
};

// append to body element
let drawing_container = document.querySelector('.drawing_container');
drawing_container.appendChild(containerGrid);

// create hoverhandler
hoverHandler = (event) => {
    if (event.target.classList.contains('grid')) {
        event.target.style.backgroundColor = 'black';
        event.target.style.border = '1px solid black';

        event.stopPropagation();
    };
    
};

// create button click handler
clickHandler = () => {
    n_grid = prompt('Enter the n for nxn grid.');
};

gridSelect = document.querySelector('.containerGrid');
gridSelect.addEventListener('mouseover', hoverHandler);

buttonSelect = document.querySelector('button');
buttonSelect.addEventListener('click', clickHandler);
