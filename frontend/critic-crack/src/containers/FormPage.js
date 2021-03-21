import React, {Component} from 'react';
import MovieFormComponent from "../components/MovieFormComponent"
import MoviesComponent from '../components/MoviesComponent';
import { addMovie } from "../actions/listActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


export class FormPage extends Component {

    

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
        const { id } = this.props.match.params;

        return (
            <div style={sectionStyle}>
                {console.log(this)}
                <MoviesComponent category={id} movies={this.props.movies}/>
                <hr></hr>
                <MovieFormComponent addMovie={this.props.addMovie} categories={this.props.categories}/>
                <a href="/"> Back to Main Menu </a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        movies: state.movieReducer.movies,
        categories: state.categoryReducer.categories
    }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);