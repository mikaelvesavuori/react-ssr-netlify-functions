import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: props.data,
			isOpen: false
		};
	}

	handleOpenModal = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};

	render() {
		return (
			<div>
				{!this.state.isOpen && (
					<div>
						<button onClick={this.handleOpenModal}>Open</button>
					</div>
				)}

				{this.state.isOpen && (
					<div size="4">
						<h1>Content</h1>
						<p>
							Some text inside this modal. Enjoy this photo by Pat Whelen on
							Unsplash!
						</p>
						<button onClick={this.handleOpenModal}>Close</button>
						<img src="/assets/image.jpg"></img>
					</div>
				)}
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

App.defaultTypes = {
	data: {}
};

export default App;
