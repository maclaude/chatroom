/**
 * NPM import
 */
import React from 'react';
import { FaAngleDoubleLeft, FaChevronLeft, FaCheck } from 'react-icons/fa';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Styles
import './settings.scss';

/**
 * Code
 */
class Settings extends React.Component {
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

    const { toggleInput } = this.props;

    toggleInput();
  }

  /**
   * Render
   */
  render() {
    const {
      inputValue,
      displayInput,
      toggleInput,
      resetUser,
    } = this.props;

    return (
      <div id="settings">
        <div id="settings-left">Chatroom</div>

        <div id="settings-right">

          <div className={classNames({ hidden: displayInput })}>
            <FaAngleDoubleLeft
              id="settings-right-addButton"
              onClick={toggleInput}
            />
          </div>

          <div
            id="settings-right-form"
            className={classNames({ hidden: !displayInput })}
          >
            <FaChevronLeft
              id="settings-right-backButton"
              onClick={resetUser}
            />
            <form id="settings-right-form" onSubmit={this.handleSubmit}>
              <input
                id="settings-right-form-input"
                type="text"
                value={inputValue}
                onChange={this.handleChange}
              />
              <FaCheck
                id="settings-right-form-button"
                onClick={this.handleSubmit}
              />
            </form>
          </div>

        </div>
      </div>
    );
  }
}

// PropTypes validation
Settings.propTypes = {
  inputValue: PropTypes.string.isRequired,
  displayInput: PropTypes.bool.isRequired,
  toggleInput: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  resetUser: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Settings;
