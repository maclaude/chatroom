/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Temporary data
import messages from 'src/data/messages';
// Component
import Message from './message';
// Styles
import './messages.scss';

/**
 * Code
 */
const Messages = () => (
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

/**
 * Export
 */
export default Messages;
