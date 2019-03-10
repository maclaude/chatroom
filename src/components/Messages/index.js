/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Component
import Message from './message';
// Styles
import './messages.scss';

/**
 * Code
 */
const Messages = ({ messages }) => (
  <div id="messages">
    {messages.map(message => (
      <Message
        key={message.id}
        author={message.user}
        content={message.message}
      />
    ))}
  </div>
);

// PropTypes validation
Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Messages;
