import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/action";
// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: authors,
      newAuthorId: 1
    };
    this.addAuthor = this.addAuthor.bind(this);
  }

  addAuthor() {
    let newAuthor = {
      first_name: "Author",
      last_name: `${this.state.newAuthorId}`,
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };
    this.setState({
      authors: this.state.authors.concat(newAuthor),
      newAuthorId: this.state.newAuthorId + 1
    });
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.addAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
