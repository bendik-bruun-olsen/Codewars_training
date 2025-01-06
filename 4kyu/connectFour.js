// Take a look at wiki description of Connect Four game:

// https://en.wikipedia.org/wiki/Connect_Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.

function whoIsWinner(piecesPositionList) {
	const rows = 6;
	const columns = 7;
	const grid = Array.from({ length: columns }, () => Array(rows).fill(null));

	const columnMap = {
		A: 0,
		B: 1,
		C: 2,
		D: 3,
		E: 4,
		F: 5,
		G: 6,
	};

	for (let placement of piecesPositionList) {
		let [placementLetter, playerColor] = placement.split("_");
		let placementColumn = columnMap[placementLetter];
		let placementRow = 0;

		// Place piece
		for (let row = 0; row < rows; row++) {
			if (grid[placementColumn][row] === null) {
				placementRow = row;
				grid[placementColumn][row] = playerColor;
				break;
			}
		}
		// Check vertical
		let count = 0;
		for (let row = 0; row < rows; row++) {
			if (grid[placementColumn][row] === playerColor) {
				count++;
				if (count === 4) {
					console.log("Vertical win");
					return playerColor;
				}
			} else {
				count = 0;
			}
		}

		// Check horizontal
		count = 0;
		for (let column = 0; column < columns; column++) {
			if (grid[column][placementRow] === playerColor) {
				count++;
				if (count === 4) {
					console.log("Horizontal Win");
					return playerColor;
				}
			} else {
				count = 0;
			}
		}

		// Check diagonal
		// Positive slope
		count = 0;
		let row = placementRow;
		let column = placementColumn;

		while (row > 0 && column > 0) {
			row--;
			column--;
		}

		while (row < rows && column < columns) {
			if (grid[column][row] === playerColor) {
				count++;
				if (count === 4) {
					console.log("Diagonal(Positive) Win!");
					return playerColor;
				}
			} else {
				count = 0;
			}
			row++;
			column++;
		}

		// Negative Slope
		count = 0;
		row = placementRow;
		column = placementColumn;
		while (row > 0 && column < columns - 1) {
			row--;
			column++;
		}

		while (row < rows && column >= 0) {
			if (grid[column][row] === playerColor) {
				count++;
				if (count === 4) {
					console.log("Diagonal(Negative) Win!");
					return playerColor;
				}
			} else {
				count = 0;
			}
			row++;
			column--;
		}
	}
	return "Draw";
}

const piecesPositionListHorizontal = [
	"A_Red",
	"A_Yellow",
	"B_Red",
	"B_Yellow",
	"C_Red",
	"C_Yellow",
	"D_Red",
];

const piecesPositionListVertical = [
	"A_Red",
	"B_Yellow",
	"A_Red",
	"B_Yellow",
	"A_Red",
	"B_Yellow",
	"G_Red",
	"B_Yellow",
];

const piecesPositionListPositiveDiagonal = [
	"C_Yellow",
	"E_Red",
	"G_Yellow",
	"B_Red",
	"D_Yellow",
	"B_Red",
	"B_Yellow",
	"G_Red",
	"C_Yellow",
	"C_Red",
	"D_Yellow",
	"F_Red",
	"E_Yellow",
	"A_Red",
	"A_Yellow",
	"G_Red",
	"A_Yellow",
	"F_Red",
	"F_Yellow",
	"D_Red",
	"B_Yellow",
	"E_Red",
	"D_Yellow",
	"A_Red",
	"G_Yellow",
	"D_Red",
	"D_Yellow",
	"C_Red",
];

console.log(whoIsWinner(piecesPositionListPositiveDiagonal));
