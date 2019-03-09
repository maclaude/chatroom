/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Settings from 'src/components/Settings';
import Form from 'src/components/Form';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Settings />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;
