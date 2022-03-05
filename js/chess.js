// class Cell {
//     constructor(row, col, piece) {
//         this.row = row;
//         this.col = col;
//         this.piece = piece;
//     }
    
// }


init();
// executed at the page initialisation
function init() {
    board = document.getElementById('board');
    createCells();
    initialisePieces();
}

function createCells() {
    console.log(board);
    for (i=0; i<8; i++) {
        for (j=0; j<8; j++) {
            this.cell = document.createElement("div");
            this.cell.setAttribute("data-col", j+1);
            this.cell.setAttribute("data-row", i+1);
            this.cell.setAttribute("data-piece", null);
            initialisePieces(this.cell);
            // a cell is white when the row and col are both even or odd
            if (i%2 === 0 && j%2 === 0 || i%2 !== 0 && j%2 !== 0) {
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

function initialisePieces(cell) {
    // check only for the 4 possible rows
    if (cell.dataset["row"] == 1 || cell.dataset["row"] == 2 ||cell.dataset["row"] == 7 ||cell.dataset["row"] == 8) {
        switch (cell.dataset["row"]) {
            // black pawns
            case '2':
                cell.innerHTML = "&#x265F;";
            break;
            // white pawns
            case '7':
                cell.innerHTML = "&#x2659;";
            break;    
            // first row (black pieces)
            case '1':
                switch (cell.dataset["col"]) {
                    // black towers
                    case '1': case '8':
                        cell.innerHTML = "&#x265C;";   
                    break;
                    // black knights
                    case '2': case '7':
                        cell.innerHTML = "	&#x265E;";
                    break;
                    // black bishops
                    case '3': case '6':
                        cell.innerHTML = "&#x265D;";
                    break
                    // black queen 
                    case '4':
                        cell.innerHTML = "&#x265B;";
                    break
                    // black knight
                    case '5':
                        cell.innerHTML = "&#x265A;";
                    break

                    default:
                    break;
                }
            break
            // 8th row (white pieces)
            case '8':
                switch (cell.dataset["col"]) {
                    // white rooks
                    case '1': case '8':
                        cell.innerHTML = "&#x2656;";   
                    break;
                    // white knights
                    case '2': case '7':
                        cell.innerHTML = "&#x2658;";
                    break;
                    // white bishops
                    case '3': case '6':
                        cell.innerHTML = "&#x2657;";
                    break
                    // white queen
                    case '4':
                        cell.innerHTML = "&#x2655;";
                    break
                    // white king
                    case '5':
                        cell.innerHTML = "&#x2654;";
                    break

                    default:
                    break;
                }
            break

            default:
            break;
        }
    }
    


    // cell.innerHTML = "&#9816;";
    // cell.style.color = "red";
}

