// Middleware socket.io
/**
 * NPM import
 */
import io from 'socket.io-client';

/**
* Local import
*/
import { WEBSOCKET_CONNECT, SEND_MESSAGE, receiveMessage } from 'src/store/reducer';
// Utils
import getCurrentTime from 'src/utils/getCurrentTime';

/**
 * Middleware
 */
const socketMiddeware = store => next => (action) => {
  let socket;

  switch (action.type) {
    case WEBSOCKET_CONNECT:
      // Définition de l'host du serveur
      socket = io('http://localhost:3000');

      // Réception des messages
      socket.on('send_message', (message) => {
        // Dispatch des messages reçus
        store.dispatch(receiveMessage(message));
      });
      break;

    case SEND_MESSAGE: {
      socket = io('http://localhost:3000');

      // Récupération du state
      const state = store.getState();

      // Création du nouveau message
      const message = {
        author: state.user,
        authorId: state.userId,
        time: getCurrentTime(),
        content: state.formInputValue,
      };

      // Envoi du nouveau message
      socket.emit('send_message', message);
      break;
    }

    default:
      break;
  }

  // Passage au voisin
  next(action);
};

/**
 * Export
 */
export default socketMiddeware;
