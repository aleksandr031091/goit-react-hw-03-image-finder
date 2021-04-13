import PropTypes from "prop-types";
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
      <header className={scss.searchbar}>
        <form className={scss.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={scss.searchFormButton}>
            <span className={scss.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={scss.searchFormInput}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
