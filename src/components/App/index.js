/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Settings from 'src/containers/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/containers/Form';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;
