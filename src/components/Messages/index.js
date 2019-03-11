/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Component
import Message from 'src/containers/Messages/message';
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
        authorId={message.userId}
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
