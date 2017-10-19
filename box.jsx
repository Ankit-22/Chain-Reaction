class Box extends React.Component {
	constructor(props) {
		super(props);
		this.state = {color: 'black', count: this.props.count};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.stopPropagation();
		if(game_flag == 1)
			return;

		if(the_game_matrix[this.props.row][this.props.access][1] != 'black' && colors[color] != the_game_matrix[this.props.row][this.props.access][1] )
			return;

		the_game_logic(this.props.row, this.props.access);

		this.setState(prevState => ({color: the_game_matrix[this.props.row][this.props.access][1], count: prevState.count+1}));
		
		color = color % users + 1;
		
		var temp = color;
		var newcolor = 0;
		var k = 1;

		while(counts[0] == 1 && counts[color] == 0 && newcolor != temp) {
			newcolor = color % users + 1;
			color = newcolor;
			k++;
		}

		if(k == users) {
			// console.log(""+colors[color]+" won!!");
			alert(""+colors[color]+" won!!")
			game_flag = 1;
		}
		/*for(var i = 0; i < 12; i++) {
			var temp = "";
			for(var j = 0; j < 12; j++)
				temp += the_game_matrix[i][j]+" ";
			console.log(temp);
		}*/
		if(counts[0] == 0 && color == users)
			counts[0] = 1;

		document.getElementById('game').click();
	}

	render() {
		return <div className = "center-align col s1"><span className = "flow-text" onClick = {this.handleClick} style = {{color: the_game_matrix[this.props.row][this.props.access][1]}}>{the_game_matrix[this.props.row][this.props.access][0]}</span></div>;
	}
}