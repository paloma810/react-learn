import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1>Hello! React!</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    </React.Fragment>
  );
}

export default App;
