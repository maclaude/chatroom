/**
 * NPM import
 */
import React from 'react';
import { FaAngleDoubleLeft, FaChevronLeft, FaCheck } from 'react-icons/fa';
import classNames from 'classnames';

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
   * Local state
   */
  state = {
    inputValue: '',
    showInput: false,
  }

  /**
   * Handlers
   */
  handleClick = () => {
    const { showInput } = this.state;

    this.setState({
      inputValue: 'Anonymous',
      showInput: !showInput,
    });
  }

  handleChange = (evt) => {
    const { value } = evt.target;

    this.setState({
      inputValue: value,
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({
      showInput: false,
    });

    console.log('Form submitted');
    // @TODO Form::handleSubmit
  }

  /**
   * Render
   */
  render() {
    const { inputValue, showInput } = this.state;

    return (
      <div id="settings">
        <div id="settings-left">Chatroom</div>

        <div id="settings-right">

          <div className={classNames({ hidden: showInput })}>
            <FaAngleDoubleLeft
              id="settings-right-addButton"
              onClick={this.handleClick}
            />
          </div>

          <div
            id="settings-right-form"
            className={classNames({ hidden: !showInput })}
          >
            <FaChevronLeft
              id="settings-right-backButton"
              onClick={this.handleClick}
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

/**
 * Export
 */
export default Settings;
