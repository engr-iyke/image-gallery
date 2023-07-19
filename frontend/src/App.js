// src/App.js
import React from 'react';
import MyTextComponent from './MyTextComponent';

const App = () => {
  const myText = 'Hello, this is my text from VSCode!';

  return (
    <div>
      <h1>Images Gallery</h1>
      <MyTextComponent text={App} />
    </div>
  );
};

export default App;
