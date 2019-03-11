/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Message from 'src/components/Messages/message';

/**
 * Preparation
 */
// State - Données
const mapStateToProps = state => ({
  userId: state.userId,
});

// Dispatch - Actions
const mapDispatchToProps = {};

/**
 * Connect
 */
const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

/**
 * Export
 */
export default MessageContainer;
