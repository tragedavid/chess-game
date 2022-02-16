init();
// executed at the page initialisation
function init() {
    board = document.getElementById('board');
    createCases();
    placePieces();
}

function createCases() {
    console.log(board);
    for (i=0; i<8; i++) {
        for (j=0; j<8; j++) {
            cell = document.createElement("div");
            // a cell is white when the row and col are both even or odd
            if (i%2 === 0 && j%2 === 0 || i%2 === 1 && j%2 === 1) {
                position = "white";
            }
            else {
                position = "black";
            }
            cell.classList += " cell cell-" + position;
            board.append(cell);
        }
    }
}

function placePieces() {

}

