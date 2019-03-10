/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
// Component
import App from 'src/components/App';
// Store
import store from 'src/store';
// Action creator
import { webSocketConnect } from 'src/store/reducer';

/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
// 2. La cible dans le DOM
const target = document.getElementById('root');

// Rendu de react-dom : react VERS dom
render(rootComponent, target);

// Connexion au webSocket
store.dispatch(webSocketConnect());
