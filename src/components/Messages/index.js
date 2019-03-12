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
class Messages extends React.Component {
  constructor(props) {
    super(props);
    // Création de la ref
    this.messages = React.createRef();
  }

  componentDidUpdate() {
    // Ciblage de la ref courante
    const messages = this.messages.current;

    messages.scrollTo(0, messages.scrollHeight);
  }

  render() {
    const { messages } = this.props;

    return (
      <div id="messages" ref={this.messages}>
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
  }
}

// PropTypes validation
Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Messages;
