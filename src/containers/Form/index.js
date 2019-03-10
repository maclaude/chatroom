/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';

// Action Creators
import { changeFormInput, sendMessage } from 'src/store/reducer';

/**
 * Preparation
 */
// State - Données
const mapStateToProps = state => ({
  inputValue: state.formInputValue,
});

// Dispatch - Actions
const mapDispatchToProps = dispatch => ({
  changeInput: (value) => {
    dispatch(changeFormInput(value));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

/**
 * Connect
 */
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

/**
 * Export
 */
export default FormContainer;
