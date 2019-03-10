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
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      };

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

    case SEND_MESSAGE:
      return {
        ...state,
        formInputValue: '',
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const webSocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const receiveMessage = newMessage => ({
  type: RECEIVE_MESSAGE,
  newMessage,
});

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
