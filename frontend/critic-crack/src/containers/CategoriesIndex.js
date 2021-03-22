import React, { Component } from 'react';
import CategoriesComponent from "../components/CategoriesComponent";
import { connect } from 'react-redux';


export class CategoriesIndex extends Component {
    render() {
        const sectionStyle = {
            backgroundImage: 'url(https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "700px",
            width: "1500px"
          };

        return (
            <div style={sectionStyle}>
                <div>
                    <h1>Categories</h1>
                    <CategoriesComponent categories={this.props.categories} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { categories: state.categoryReducer.categories }
};

export default connect(mapStateToProps)(CategoriesIndex);