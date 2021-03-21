import React, { Component } from 'react';

class MovieFormComponent extends Component {
    state = {
        name: "",
        rating: "",
        director: "",
        plot: "",
        category_id: ""
    };

    handleNameChange = event => {
        event.preventDefault();
        this.setState({
            name: event.target.value
        });
    };

    handleRatingChange = event => {
        event.preventDefault();
        this.setState({
            rating: event.target.value
        });
    };

    handleDirectorChange = event => {
        event.preventDefault();
        this.setState({
            director: event.target.value
        });
    };

    handlePlotChange = event => {
        event.preventDefault();
        this.setState({
            plot: event.target.value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addMovie(this.state);
        this.setState({
            name: "",
            rating: "",
            director: "",
            plot: "",
            category_id: ""
        });
    };

    renderCategories() {
        const categories = this.props.categories || [];
        return categories.map((category, idx) => {
            return (
                <option key={idx} value={category.id}>
                    {category.title}
                </option>
            );
        });
    }

    render() {
        console.log(this.state);

        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Movie Title"
                        onChange={this.handleNameChange}
                    />

                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={this.state.rating}
                        placeholder="1"
                        onChange={this.handleRatingChange}
                    />

                    <input
                        type="text"
                        value={this.state.director}
                        placeholder="Director Name"
                        onChange={this.handleDirectorChange}
                    />

                    <input
                        type="text"
                        value={this.state.plot}
                        placeholder="Summary of the Movie"
                        onChange={this.handlePlotChange}
                    />

                    <select name="category" onChange={this.handleCategoryChange}>
                        <option>Choose Category</option>
                        {this.renderCategories()}
                    </select>
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export default MovieFormComponent;