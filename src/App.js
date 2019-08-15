import React from 'react';

import GlobalStyles from './styles/global'

import Form from './components/simpleFormHook/Form'
import FormHook from './components/customFormHook/FormHook'
import FormHook2 from './components/customFormHook2/FormHook2'

function App() {
  return (
    <div className="App">
      <Form />
      <FormHook />
      <FormHook2 />

      <GlobalStyles />
    </div>
  );
}

export default App;
