import React from 'react';
import { render } from 'react-dom';
import './App.css';

import Modali, { useModali } from '../../src';

const App = () => {
  const [exampleModal, toggleExampleModal] = useModali({
    animated: true,
  });
  return (
    <div className="App">
      <button onClick={toggleExampleModal}>
        Click me to open
      </button>
      <Modali {...exampleModal}>
        <h2 className="modal-body">
          I'm an example Modal 👋
        </h2>
      </Modali>
    </div>
  );
};

render(<App />, document.getElementById("root"));
