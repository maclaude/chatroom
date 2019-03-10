/**
 * Initial State
 */
const initialState = {
  displaySettingsInput: false,
  user: 'Anonymous',
  formInputValue: '',
  messages: [],
};

/**
 * Types
 */
const TOGGLE_SETTINGS_INPUT = 'TOGGLE_SETTINGS_INPUT';
const CHANGE_SETTINGS_INPUT = 'CHANGE_SETTINGS_INPUT';
const RESET_USER = 'RESET_USER';
const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';
const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS_INPUT:
      return {
        ...state,
        displaySettingsInput: !state.displaySettingsInput,
      };

    case CHANGE_SETTINGS_INPUT:
      return {
        ...state,
        user: action.value,
      };

    case RESET_USER:
      return {
        ...state,
        user: 'Anonymous',
        displaySettingsInput: !state.displaySettingsInput,
      };

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
export const toggleSettingsInput = () => ({
  type: TOGGLE_SETTINGS_INPUT,
});

export const changeSettingsInput = value => ({
  type: CHANGE_SETTINGS_INPUT,
  value,
});

export const resetUser = () => ({
  type: RESET_USER,
});

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
