import React, { Component } from "react";
import * as actionCreators from "./store/action";
import { connect } from "react-redux";
class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.imageUrl}
              alt={this.props.first_name + " " + this.props.last_name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.first_name + " " + this.props.last_name}</span>
            </h5>
            <small className="card-text">{this.props.books.length} books</small>
          </div>
          <button
            className="btn btn-danger"
            onClick={author => this.props.DeleteAuthor(this.props.author)}
          >
            {" "}
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    DeleteAuthor: author => dispatch(actionCreators.DeleteAuthor(author))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AuthorCard);
