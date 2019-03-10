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
    {messages.map((message, index) => (
      <Message
        // Index en key temporaire
        // eslint-disable-next-line react/no-array-index-key
        key={index}
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
