var the_game_matrix = new Array(12);

var colors = ['black', 'red', 'blue', 'green', 'yellow', 'cyan', 'voilet'];
var users = 3;
var color = 1;
var game_flag = 0;
var counts = new Array(7);
for(var i = 0; i <= users; i++)
	counts[i] = 0;
for(var i = 0; i < 12; i++) {
	the_game_matrix[i] = new Array(12);
}

for(var i = 0; i < 12; i++) {
	for(var j = 0; j < 12; j++) {
		the_game_matrix[i][j] = [0, 'black'];
	}
}

function the_game_logic(x, y) {
	counts[color]++;
	if(++the_game_matrix[x][y][0] < (4 - (x == 11 ? 1 : 0) - (x == 0 ? 1 : 0) - (y == 0 ? 1 : 0) - (y == 11 ? 1 : 0))) {
		if(!(the_game_matrix[x][y][1] == colors[color])) {
			// console.log(the_game_matrix[x][y][0]+" "+color+" "+counts[color]);
			counts[color] += the_game_matrix[x][y][0] - 1;
			counts[colors.indexOf(the_game_matrix[x][y][1])] -= the_game_matrix[x][y][0] - 1;
		}
		the_game_matrix[x][y][1] = colors[color];
		return;
	}
	if(!(the_game_matrix[x][y][1] == colors[color])) {
		// console.log(the_game_matrix[x][y][0]+" "+color+" "+counts[color]);
		counts[color] += the_game_matrix[x][y][0] - 1;
		counts[colors.indexOf(the_game_matrix[x][y][1])] -= the_game_matrix[x][y][0] - 1;
	}
	the_game_matrix[x][y][1] = colors[0];
	the_game_matrix[x][y][0] = 0;
	counts[color] -= 4;
	if(x+1 < 12) {
		the_game_logic(x+1, y);
	}
	if(x-1 >= 0) {
		the_game_logic(x-1, y);
	}
	if(y+1 < 12) {
		the_game_logic(x, y+1);
	}
	if(y-1 >= 0) {
		the_game_logic(x, y-1);
	}
}