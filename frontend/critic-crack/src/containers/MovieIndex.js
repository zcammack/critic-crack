import React, {Component} from 'react';
import MoviesComponent from '../components/MoviesComponent';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class MoviesIndex extends Component {
    render() {
        const sectionStyle = {
            backgroundImage:
              "url(https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "700px",
            width: "1500px"
          };
    return (
        <div style={sectionStyle}>
            <div>
                <h1>All Movies</h1>
                {console.log(this)}
                <MoviesComponent movies={this.props.movies}/>
                <Link to="/movies-new">Add A New Movie</Link>
            </div>
        </div>
    )
}

}

const mapStateToProps = state => ({movies: state.movieReducer.movies});

export default connect (mapStateToProps, null)(MoviesIndex)