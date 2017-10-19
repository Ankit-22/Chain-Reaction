class Ex extends React.Component {
	render() {
		const boxes = the_game_matrix[this.props.access].map((box, index) => <Box count = {the_game_matrix[this.props.access][index][0]} key = {index} access = {index} row = {this.props.access}/>);
		return (<div className = "row valign-wrapper">{boxes}</div>);
	}
}