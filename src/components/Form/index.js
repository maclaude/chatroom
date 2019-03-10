/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
   * Handlers
   */
  handleChange = (evt) => {
    // Récupération de la valeur du champ
    const { value } = evt.target;
    // Récupération des props
    const { changeInput } = this.props;

    changeInput(value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { inputValue, sendMessage } = this.props;

    // Si le champ n'est pas vide
    if (inputValue.trim() !== '') {
      // Envoi du message
      sendMessage();
    }
  }

  /**
   * Render
   */
  render() {
    const { inputValue } = this.props;

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

// PropTypes validation
Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Form;
