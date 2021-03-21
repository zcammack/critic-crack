import React, { Component } from "react";

export class MoviePage extends Component {
  
  render(){
    const sectionStyle = {
      backgroundImage:
        "url(https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      width: "1500px"
    };
    const { id } = this.props.match.params;
    const movieID = parseInt(id, 10);
    const movies = this.props.movies || [];
    const movie =
      movies.find(movie => movie.id === movieID) || {};
    const category = movie.category || {};
    
    return (
      <div style={sectionStyle}>
        <h1>{movie.name}</h1>
        <div>Category: {category.title}</div>
        <div>Rating: {movie.rating}</div>
        <div>Director: {movie.director}</div>
        <div>Plot: {movie.plot}</div>
        <br />
        <a href="/"> Back to Main Menu </a>
      </div>
    );
  }
}


export default (MoviePage);