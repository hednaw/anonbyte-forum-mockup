import React, { Component } from "react";
import "./PostTemplate.css";

class PostTemplate extends Component {
	render() {
		console.log(this.props.postContent);
		return (
			<div>
				<div className="container">
					<h3>{"from: " + this.props.posterName}</h3>
					<p>{this.props.postContent}</p>
				</div>
			</div>
		);
	}
}

export default PostTemplate;
