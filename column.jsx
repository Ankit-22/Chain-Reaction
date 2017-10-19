class Ex2 extends React.Component {
	
	constructor(props) {
		super(props);
		this.reloadGame = this.reloadGame.bind(this);
	}

	reloadGame(event) {
		this.forceUpdate();
	}

	render() {
		const rows = the_game_matrix.map((row, index) => <Ex key = {index} access = {index} />);
		return (<div id = "game" onClick={this.reloadGame} >{rows}</div>);
	}
}