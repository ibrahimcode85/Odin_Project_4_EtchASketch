// set the number of n for nxn grid
const nth_grid = 16;

// create big container
let mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'mainContainer');

for (let nContainer = 1; nContainer <= nth_grid; nContainer++){
    
    let container = document.createElement('div');
    container.setAttribute('class','container');
   
    //add grid to container
    for (let nGrid = 1; nGrid <= nth_grid; nGrid++){
        
        let gridText = `grid_${nContainer}-${nGrid}`;
        let grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        grid.setAttribute('id', gridText);
        container.appendChild(grid);
    }

    //append to main container
    mainContainer.appendChild(container); 
};

// append to body element
document.body.appendChild(mainContainer);

// create hoverhandler
hoverHandler = (event) => {
    event.target.style.backgroundColor = 'yellow';
};

gridSelect = document.querySelector('.mainContainer');
gridSelect.addEventListener('mouseover', hoverHandler);