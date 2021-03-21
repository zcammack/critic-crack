import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class CategoryPage extends Component {
    render() {
        const sectionStyle = {
            backgroundImage: 'url(https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "700px",
            width: "1500px"
          };

          
    const id = parseInt(this.props.match.params.id, 10);
    const categories = this.props.categories || [];
    const category = categories.find(cat => cat.id === id) || {};
    const moviesInCategory = (this.props.movies || [])
          .filter(movie => movie.category.id === category.id)
          .map((movie, idx) => {
              const url = "/movies/" + movie.id;
              return(
                    <li key={idx}>
                      <Link to={url} className="App-link">
                          {movie.name}
                      </Link>
                    </li>
              );
          });

        return (
            <div style={sectionStyle}>
                <br />
                <h1>{category.title} Movies</h1>
                <ul>{moviesInCategory}</ul>
                <br />
                <div>
                    <Link to="/movies-new" className="App-link">
                        Add New Movie
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movieReducer.movies,
    categories: state.categoryReducer.categories
});

export default connect(mapStateToProps)(CategoryPage);