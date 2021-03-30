import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import PostInput from "./components/PostInput";
import PostTemplate from "./components/PostTemplate";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			posterName: "",
			postContent: "",
		};

		this.passPostNameContent = this.passPostNameContent.bind(this);
	}

	addPost = (post) => {
		this.setState({
			posts: [post, ...this.state.posts],
		});
	};

	passPostNameContent(name, content) {
		this.setState({
			posterName: name,
			postContent: content,
		});
	}

	render() {
		console.log(this.state.posterName, this.state.postContent);
		console.log(this.state.posts);

		return (
			<div className="App">
				<Header></Header>
				<PostInput
					PostName={this.passPostNameContent}
					newPost={this.addPost}
				></PostInput>
				{this.state.posts.map((post) => (
					// <div>{post.posterName}</div>
					<PostTemplate
						posterName={post.posterName}
						postContent={post.PostContent}
						key={post.id}
					/>
				))}
			</div>
		);
	}
}

export default App;
