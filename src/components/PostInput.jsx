import React from "react";
import shortid from "shortid";
import "./PostInput.css";
const DefaultName = "Anonymous";
class PostInput extends React.Component {
	state = {
		Name: DefaultName,
		PostContent: "",
	};

	handleNameChange = (event) => {
		this.setState({ Name: event.target.value });
	};

	handleContentChange = (event) => {
		this.setState({ PostContent: event.target.value });
	};

	HandlePostClicked = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.props.PostName(this.state.Name, this.state.PostContent);
		this.props.newPost({
			posterName: this.state.Name,
			PostContent: this.state.PostContent,
			id: shortid.generate(),
		});
	};

	render() {
		return (
			<div>
				<input
					className="NameInput"
					value={this.state.Name}
					onChange={this.handleNameChange}
				></input>
				<button
					className="postButton"
					disabled={this.state.Name < 1 || this.state.PostContent < 1}
					onClick={this.HandlePostClicked}
				>
					Post
				</button>
				<br></br>
				<textarea
					name="PostContent"
					cols="40"
					rows="5"
					onChange={this.handleContentChange}
				></textarea>
			</div>
		);
	}
}

export default PostInput;
