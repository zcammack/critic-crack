import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesComponent extends Component {
    renderMovies = () => {
        return this.props.activities.map((activity, idx) => {
            const url = '/activities/' + activity.id;

            return (
                <li key={idx} >
                    <Link to={url} className="App-link">{activity.name}</Link>
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