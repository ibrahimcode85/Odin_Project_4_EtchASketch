// set the default n for 'n x n' grid
let nDefaultNumber = 10;

// function for button click
clickHandler = () => {
    nInputText = prompt("Enter the number 'n' for 'n x n' grid.");
    nInputNum  = Number(nInputText);

    // remove grid
    removeGrid();

    // set to default n if the input is blank or more than 100
    if (nInputNum == '') {
        nInputNum = nDefaultNumber;
        alert('Input is blank. 10 x 10 grid is created as default.');

    } else if (nInputNum > 100) {
        nInputNum = nDefaultNumber;
        alert('Input is more than 100. 10 x 10 grid is created as default to save on performance.');
    };

    // create grid based on user input
    createGrid(nInputNum);

    // add event listener to grid
    gridSelect = document.querySelector('.containerGrid');
    gridSelect.addEventListener('mouseover', hoverHandler);
};

// function to reset grid container
removeGrid = () => {
    const container = document.querySelector('.containerGrid');
    
    if (container !== null) {
        container.remove();
    };
};

// function to create grids
createGrid =(nNumber) => {

    // create container for all grids
    let containerGrid = document.createElement('div');
    containerGrid.setAttribute('class', 'containerGrid');

    // create row of grids and append it to the container
    for (let nRow = 1; nRow <= nNumber; nRow++){
    
        let containerRow = document.createElement('div');
        containerRow.setAttribute('class','containerRow');
       
        //add grid to the row container
        for (let nGrid = 1; nGrid <= nNumber; nGrid++){
            
            let gridText = `grid_${nRow}-${nGrid}`;
            let grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            grid.setAttribute('id', gridText);
            containerRow.appendChild(grid);
        }
    
        //append to main container
        containerGrid.appendChild(containerRow); 
    };

    // append the container grids to the drawing area
    let containerDrawArea = document.querySelector('.containerDrawArea');
    containerDrawArea.appendChild(containerGrid);

}

// function for mouse hovering on grids
hoverHandler = (event) => {
    if (event.target.classList.contains('grid')) {
        event.target.style.backgroundColor = 'black';
        event.target.style.border = '1px solid black';

        event.stopPropagation();
    };
    
};

// add event listener to button 
buttonSelect = document.querySelector('button');
buttonSelect.addEventListener('click', clickHandler);