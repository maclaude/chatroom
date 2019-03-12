/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */

/**
 * Code
 */
const Message = ({
  userId,
  author,
  authorId,
  time,
  content,
}) => {
  // Vérification que l'utilisateur est l'auteur du message
  const isSend = (userId === authorId);

  return (
    <div className={classNames(
      'message',
      {
        'message-sent': isSend,
        'message-received': !isSend,
      },
    )}
    >
      <div className="message-header">
        <h1 className="message-author">{author}</h1>
        <p className="message-time">{time}</p>
      </div>
      <p className="message-content">{content}</p>
    </div>
  );
};

// PropTypes validation
Message.propTypes = {
  userId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Message;
