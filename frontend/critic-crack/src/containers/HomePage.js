import React, { Component } from "react";
import CategoriesComponent from "../components/CategoriesComponent";
import { connect } from "react-redux";

export class HomePage extends Component {
    render() {
        const headerStyle = {
            color: "black",
            textAlign: "center",
            fontFamily: "Lucida Console, Courier, monospace"
        };

        const menuStyle = {
            color: "black",
            textAlign: "center",
            fontFamily: "Times New Roman"
        };

        const buttonStyle = {
            textAlign: "center"
        };

        const sectionStyle = {
            backgroundImage: "url(https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "1500px",
            height: "700px"
        };

        return (
            <div style={sectionStyle}>
                <br />
                <br />
                <h2 style={headerStyle}>Welcome to Critic-Crack!</h2>
                <br />
                <h4 style={menuStyle}>
                    {" "}
                    Where you can critique movies like a pro!
                </h4>
                <br />
                <div style={buttonStyle}>
                    <CategoriesComponent categories={this.props.categories} />

                    <br />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return { categories: state.categoryReducer.categories }
};

export default connect(mapStateToProps)(HomePage);