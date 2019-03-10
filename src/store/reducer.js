/**
 * Initial State
 */
const initialState = {
  user: 'Anonymous',
  formInputValue: '',
  messages: [],
};

/**
 * Types
 */
const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';
const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FORM_INPUT:
      return {
        ...state,
        formInputValue: action.value,
      };

    case SEND_MESSAGE: {
      // Création du nouveau message
      const newMessage = {
        user: state.user,
        message: state.formInputValue,
      };
      // Nouveau tableau de messages
      const messages = [...state.messages, newMessage];
      // Nouveau state
      return {
        ...state,
        messages,
        formInputValue: '',
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeFormInput = value => ({
  type: CHANGE_FORM_INPUT,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
