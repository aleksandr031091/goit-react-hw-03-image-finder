import { Component } from "react";

import scss from "./Searchbar.module.scss";

class Searchbar extends Component {
  state = { text: "" };

  nahdleChange = (event) => {
    const { value } = event.target;

    this.setState({ text: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.text}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.nahdleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
