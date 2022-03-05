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
            this.cell.setAttribute("data-piece-color", null);
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
                cell.setAttribute("data-piece-color", "black");
                cell.setAttribute("data-piece", "pawn");
            break;
            // white pawns
            case '7':
                cell.innerHTML = "&#x2659;";
                cell.setAttribute("data-piece-color", "white");
                cell.setAttribute("data-piece", "pawn");
            break;    
            // first row (black pieces)
            case '1':
                cell.setAttribute("data-piece-color", "black");
                switch (cell.dataset["col"]) {
                    // black rooks
                    case '1': case '8':
                        cell.innerHTML = "&#x265C;";
                        cell.setAttribute("data-piece", "rook");
                    break;
                    // black knights
                    case '2': case '7':
                        cell.innerHTML = "	&#x265E;";
                        cell.setAttribute("data-piece", "knight");
                    break;
                    // black bishops
                    case '3': case '6':
                        cell.innerHTML = "&#x265D;";
                        cell.setAttribute("data-piece", "bishop");
                    break
                    // black queen 
                    case '4':
                        cell.innerHTML = "&#x265B;";
                        cell.setAttribute("data-piece", "queen");
                    break
                    // black knight
                    case '5':
                        cell.innerHTML = "&#x265A;";
                        cell.setAttribute("data-piece", "knight");
                    break

                    default:
                    break;
                }
            break
            // 8th row (white pieces)
            case '8':
                cell.setAttribute("data-piece-color", "white");
                switch (cell.dataset["col"]) {
                    // white rooks
                    case '1': case '8':
                        cell.innerHTML = "&#x2656;";
                        cell.setAttribute("data-piece", "rook");
                    break;
                    // white knights
                    case '2': case '7':
                        cell.innerHTML = "&#x2658;";
                        cell.setAttribute("data-piece", "knight");
                    break;
                    // white bishops
                    case '3': case '6':
                        cell.innerHTML = "&#x2657;";
                        cell.setAttribute("data-piece", "bishop");
                    break
                    // white queen
                    case '4':
                        cell.innerHTML = "&#x2655;";
                        cell.setAttribute("data-piece", "queen");
                    break
                    // white king
                    case '5':
                        cell.innerHTML = "&#x2654;";
                        cell.setAttribute("data-piece", "king");
                    break

                    default:
                    break;
                }
            break

            default:
            break;
        }
    }
}

function movePiece() {

}