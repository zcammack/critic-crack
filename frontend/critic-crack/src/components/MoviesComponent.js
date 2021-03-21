import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesComponent extends Component {
    renderMovies = () => {
        return this.props.movies.map((movie, idx) => {
            const url = '/movies/' + movie.id;

            return (
                <li key={idx} >
                    <Link to={url} className="App-link">{movie.name}</Link>
                </li>
            );
        });
    };

    render(){
        return(
            <ul>
                {this.renderMovies()}
            </ul>
        );
    }
}

export default MoviesComponent;