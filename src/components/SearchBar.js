import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  onInputsChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputsChange}
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <p>You're searching for: {this.state.term} </p>
      </div>
    );
  }
}

export default SearchBar;
