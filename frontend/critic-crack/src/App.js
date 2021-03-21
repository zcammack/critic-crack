import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import FormPage from "./containers/FormPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuComponent from "./components/MenuComponent";
import HomePage from "./containers/HomePage";
import CategoryPage from "./containers/CategoryPage";
import CategoriesIndex from "./containers/CategoriesIndex";
import MoviePage from "./containers/MoviePage";
import MovieIndex from "./containers/MovieIndex";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addModels } from "./actions/listActions";
export class App extends Component {
  componentDidMount() {
    this.props.addModels();
  }

  render() {
    return (
      <div>
        <MenuComponent categories={this.props.categories} />
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={CategoriesIndex} />
          <Route path="/categories/:id" component={CategoryPage} />
          <Route exact path="/movies" component={MovieIndex} />
          <Route exact path="/movies-new" component={FormPage} />
          <Route
            path="/movies/:id"
            render={routerProps => (
              <MoviePage
                {...routerProps}
                movies={this.props.movies}
                categories={this.props.categories}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movies,
    categories: state.categoryReducer.categories
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addModels }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
