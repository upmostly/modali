import React from 'react';
import { render } from 'react-dom';
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
        <p>
          I'm an example Modal
        </p>
      </Modali>
    </div>
  );
};

render(<App />, document.getElementById("root"));
