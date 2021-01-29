import React, {Component} from 'react';

class ClickablePicture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
	}

	changeImg = () => {
		if (this.state.clicked) {
			this.setState({
				clicked: false
			});
		} else {
			this.setState({
				clicked: true
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<img src={this.state.clicked ? this.props.imgClickable : this.props.img}
					 onClick={this.changeImg}
					 alt=""/>
			</React.Fragment>
		);
	}
}

export default ClickablePicture;