/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Settings from 'src/components/Settings';

// Action Creators
import { toggleSettingsInput, changeSettingsInput, resetUser } from 'src/store/reducer';

/**
 * Preparation
 */
// State - Données
const mapStateToProps = state => ({
  inputValue: state.user,
  displayInput: state.displaySettingsInput,
});

// Dispatch - Actions
const mapDispatchToProps = dispatch => ({
  toggleInput: () => {
    dispatch(toggleSettingsInput());
  },
  changeInput: (value) => {
    dispatch(changeSettingsInput(value));
  },
  resetUser: () => {
    dispatch(resetUser());
  },
});

/**
 * Connect
 */
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

/**
 * Export
 */
export default SettingsContainer;
