/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Messages from 'src/components/Messages';

/**
 * Preparation
 */
// State - Données
const mapStateToProps = state => ({
  messages: state.messages,
});

// Dispatch - Actions
const mapDispatchToProps = {};

/**
 * Connect
 */
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

/**
 * Export
 */
export default MessagesContainer;
