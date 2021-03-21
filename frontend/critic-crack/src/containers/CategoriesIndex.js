import React, { Component } from 'react';
import CategoriesComponent from "../components/CategoriesComponent";
import { connect } from 'react-redux';


export class CategoriesIndex extends Component {
    render() {
        return (
            <div>
                <h1>Categories</h1>
                <CategoriesComponent categories={this.props.categories} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { categories: state.categoryReducer.categories }
};

export default connect(mapStateToProps)(CategoriesIndex);