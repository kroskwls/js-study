import React from 'react';
import axios from "axios";
import Movie from './Movie';
import './App.css';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	componentDidMount() {
		axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating').then((res) => {
			if (res.status === 200) {
				const { data: { data: { movies } } } = res;
				this.setState({ isLoading: false, movies });
				console.log(this.state);
			}
		})
	}

	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className="container">
				{isLoading 
					? (
						<div className="loader">
							<span className="loader_text">Loading...</span>
						</div>
					) : (
						<div className="movies">
							{movies.map(movie => (
								<Movie 
									key={movie.id} 
									year={movie.year} 
									title={movie.title} 
									summary={movie.summary} 
									poster={movie.medium_cover_image} 
									genres={movie.genres}
								/>
							))}
						</div>
				)}
			</section>
		);
	}
}

export default App;
