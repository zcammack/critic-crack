import React, {Component} from 'react';
import MoviesComponent from '../components/MoviesComponent';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class MoviesIndex extends Component {
    render() {
       
    return (
        <div>
            <h1>All Movies</h1>
            <MoviesComponent movies={this.props.movies}/>
            <Link to="/movies-new">Add A New Movie</Link>
        </div>
    )
}

}

const mapStateToProps = state => ({movies: state.movieReducer.movies});

export default connect (mapStateToProps, null)(MoviesIndex)