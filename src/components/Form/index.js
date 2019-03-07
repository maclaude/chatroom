/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Styles
import './form.scss';

/**
 * Code
 */
class Form extends React.Component {
  /**
   * Local state
   */
  state = {
    inputValue: '',
  }

  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { value } = evt.target;

    this.setState({
      inputValue: value,
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('Form submitted');
    // @TODO Form::handleSubmit
  }

  /**
   * Render
   */
  render() {
    const { inputValue } = this.state;

    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Votre message"
          value={inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

/**
 * Export
 */
export default Form;
