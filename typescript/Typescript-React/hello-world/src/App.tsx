// import { Component } from "react";

import { useState } from "react"

// export interface State {
// 	userName: string;
// 	imageUrl: string;
// }

// export default class App extends Component {
// 	state: State = {
// 		userName: 'John',
// 		imageUrl: 'https://picsum.photos/600/150'
// 	};
// 	styles = { margin: 40 };

// 	handleClick = () => {
// 		this.setState({ userName: 'Mary' });
// 	}

// 	render() {
// 		return (
// 			<div style={this.styles}>
// 				<h1>{this.state.userName}</h1>
// 				<button onClick={this.handleClick}>CHANGE TO MARY</button>
// 				<img src={this.state.imageUrl} alt="img"/>
// 			</div>
// 		);
// 	}
// }
interface State {
	username: string;
	imageUrl: string;
}

export const App: React.FC = () => {
	// const [username, setUsername] = useState('John');
	// const [imageUrl, setImageUrl] = useState('https://picsum.photos/600/150');
	const [state, setState] = useState<State>({
		username: 'John',
		imageUrl: 'https://picsum.photos/600/150'
	});
	const styles = { margin: 40 };

	return (
		<div style={styles}>
			<h1>{state.username}</h1>
			<img src={state.imageUrl} alt="img" />
		</div>
	);
}