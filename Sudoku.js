var grid = [
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[2, 3, 1, 5, 6, 4, 8, 9, 7],
		[8, 9, 7, 2, 3, 1, 5, 6, 4],
		[5, 6, 4, 8, 9, 7, 2, 3, 1],
		[3, 1, 2, 6, 4, 5, 9, 7, 8],
		[9, 7, 8, 3, 1, 2, 6, 4, 5],
		[6, 4, 5, 9, 7, 8, 3, 1, 2]
];

var tgrid;
var i;
var j;

function setup() {
	createCanvas(windowWidth, windowHeight);
	shuffleGrid();
	makePlayableSudoku();
	initTgrid();
}

function draw() {
	layout();
	displayGrid();
	text("CLICK ON THE CELL THAT YOU WOULD LIKE TO PLACE THE NUMBER ON AFTER DOING THAT YOU CAN ENTER THE NUMBER THAT YOU WANT TO PLACE IN THAT CELL", 50, 100, 300, 600);
	text("IF YOU'D LIKE TO CHANGE\nYOUR INPUT THEN YOU CAN\nENTER A DIFFERENT NUMBER\nIN THAT CELL\n\nYOU CAN EMPTY A CELL BY\nENTERING '0' AS AN INPUT", 900, 100, 1000, 600);
	var x, y;
	x = i;
	y = j;
	if (i < 9 && j < 9) {
		switch (key) {
			case '0':	if (tgrid[x][y] == 0) {
							grid[x][y] = 0;
						}
						break;
			case '1':	if (tgrid[x][y] == 0) {
							grid[x][y] = 1;
						}
						break;
			case '2':	if (tgrid[x][y] == 0) {
							grid[x][y] = 2;
						}
						break;
			case '3':	if (tgrid[x][y] == 0) {
							grid[x][y] = 3;
						}
						break;
			case '4':	if (tgrid[x][y] == 0) {
							grid[x][y] = 4;
						}
						break;
			case '5':	if (tgrid[x][y] == 0) {
							grid[x][y] = 5;
						}
						break;
			case '6':	if (tgrid[x][y] == 0) {
							grid[x][y] = 6;
						}
						break;
			case '7':	if (tgrid[x][y] == 0) {
							grid[x][y] = 7;
						}
						break;
			case '8':	if (tgrid[x][y] == 0) {
							grid[x][y] = 8;
						}
						break;
			case '9':	if (tgrid[x][y] == 0) {
							grid[x][y] = 9;
						}
						break;
		}
	}
}

function initTgrid() {
	tgrid = Array(9);
	for (var i = 0; i <9 ; i++) {
		tgrid[i] = Array(9);
	}
	for (var i = 0;  i < 9; i++) {
		for (var j = 0;  j < 9; j++) {
			tgrid[i][j] = grid[i][j];
		}
	}
}

function layout() {
	background(200, 100, 50);
	fill(255);
	strokeWeight(5);
	for (var i = 400; i < 850; i += 50) {
		for (var j = 100; j < 550; j += 50) {
			rect(i , j, 50, 50);
		}
	}
}

function makePlayableSudoku() {
	pos = []
	for (var x = 0; x < 40; x++) {
		var i = floor(random(0, 9));
		var j = floor(random(0, 9));
		pos.push(i, j);
		grid[i][j] = 0;
	}
	if (solve()) {
		for (var k = 0; k < pos.length; k += 2) {
			grid[pos[k]][pos[k+1]] = 0;
		}
	}
}

function displayGrid() {
	var x = 415;
	var y = 110;
	for (var i = 0; i < 9; i++, x += 50) {
		for (var j = 0; j < 9; j++, y += 50) {
			if (grid[j][i] != 0) {
				fill(0);
				textSize(30);
				text(grid[j][i],x,y,50,50);
			}
		}
		y = 110;
	}
}

function shuffleGrid() {
	for (var i = 0; i < 20; i++) {
		shuffleCol();
		shuffleRow();
	}
}

function solve() {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (grid[i][j] == 0) {
				for (k = 1; k <= 9; k++) {
					if (isValid(i, j, k)) {
						grid[i][j] = k;
						if (solve()) {
							return true;
						}
						else {
							grid[i][j] = 0;
						}
					}
				}
				return false;
			}
		}
	}
	return true;
}

function shuffleCol(col) {
	var r = floor(random(0, 3));
	var col, cc;
	switch (r) {
		case 0:	col = 0;
				cc = 2;
				break;
		case 1:	col = 3;
				cc = 5;
				break;
		case 2:	col = 6;
				cc = 8;
				break;
	}
	var temp;
	for (var i = 0; i < 9; i++) {
		temp = grid[i][col];
		grid[i][col] = grid[i][cc];
		grid[i][cc] = temp;
	}
}

function shuffleRow() {
	var r = floor(random(0, 3));
	var row, rr;
	switch (r) {
		case 0:	row = 0;
				rr = 2;
				break;
		case 1:	row = 3;
				rr = 5;
				break;
		case 2:	row = 6;
				rr = 8;
				break;
	}
	var temp;
	for (var i = 0; i < 9; i++) {
		temp = grid[row][i];
		grid[row][i] = grid[rr][i];
		grid[rr][i] = temp;
	}
}

function checkRow(row, num) {
	for (i = 0; i < 9; i++) {
		if (grid[row][i] == num) {
			return true;
		}
	}
	return false;
}

function checkColumn(col, num) {
	for (i = 0; i < 9; i++) {
		if (grid[i][col] == num) {
			return true;
		}
	}
	return false;
}

function checkGrid(row, col, num) {
	var r = row - row % 3;
	var c = col - col % 3;
	for (i = r; i < r + 3; i++) {
		for (j = c; j < c + 3; j++) {
			if (grid[i][j] == num) {
				return true;
			}
		}
	}
	return false;
}

function isValid(i, j, num) {
	if (!checkGrid(i, j, num) && !checkColumn(j, num) && !checkRow(i, num)) {
		return true;
	}
	return false;
}

function mouseClicked() {
	if (mouseX >= 400 && mouseX < 450) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 0;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 0;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 0;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 0;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 0;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 0;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 0;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 0;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 0;
		}
	}
	else
	if (mouseX >= 450 && mouseX < 500) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 1;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 1;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 1;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 1;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 1;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 1;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 1;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 1;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 1;
		}
	}
	else
	if (mouseX >= 500 && mouseX < 550) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 2;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 2;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 2;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 2;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 2;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 2;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 2;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 2;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 2;
		}
	}
	else
	if (mouseX >= 550 && mouseX < 600) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 3;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 3;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 3;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 3;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 3;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 3;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 3;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 3;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 3;
		}
	}
	else
	if (mouseX >= 600 && mouseX < 650) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 4;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 4;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 4;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 4;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 4;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 4;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 4;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 4;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 4;
		}
	}
	else
	if (mouseX >= 650 && mouseX < 700) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 5;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 5;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 5;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 5;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 5;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 5;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 5;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 5;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 5;
		}
	}
	else
	if (mouseX >= 700 && mouseX < 750) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 6;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 6;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 6;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 6;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 6;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 6;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 6;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 6;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 6;
		}
	}
	else
	if (mouseX >= 750 && mouseX < 800) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 7;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 7;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 7;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 7;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 7;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 7;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 7;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 7;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 7;
		}
	}
	else
	if (mouseX >= 800 && mouseX < 850) {
		if (mouseY >= 100 && mouseY < 150) {
			i = 0;
			j = 8;
		}
		else
		if (mouseY >= 150 && mouseY < 200) {
			i = 1;
			j = 8;
		}
		else
		if (mouseY >= 200 && mouseY < 250) {
			i = 2;
			j = 8;
		}
		else
		if (mouseY >= 250 && mouseY < 300) {
			i = 3;
			j = 8;
		}
		else
		if (mouseY >= 300 && mouseY < 350) {
			i = 4;
			j = 8;
		}
		else
		if (mouseY >= 350 && mouseY < 400) {
			i = 5;
			j = 8;
		}
		else
		if (mouseY >= 400 && mouseY < 450) {
			i = 6;
			j = 8;
		}
		else
		if (mouseY >= 450 && mouseY < 500) {
			i = 7;
			j = 8;
		}
		else
		if (mouseY >= 500 && mouseY < 550) {
			i = 8;
			j = 8;
		}
	}
}
