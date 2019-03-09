/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const Message = ({ author, content }) => (
  <div className="message">
    <h1 className="message-author">{author}</h1>
    <p className="message-content">{content}</p>
  </div>
);

// PropTypes validation
Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Message;
