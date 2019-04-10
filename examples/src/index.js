import React from 'react';
import { render } from 'react-dom';

import Installation from './Installation';
import BasicExample from './BasicExample';
import Modali, { useModali } from '../../src';
import Button from "./Button";
import MultipleModalsExample from "./MultipleModalsExample";
import OptionsModalsExample from "./OptionsModalsExample";

const App = () => {
  const [exampleModal, toggleExampleModal] = useModali({
    animated: true,
  });
  return (
    <div className="container my-5">
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <img src="https://upmostly.com/wp-content/uploads/modali-logo.png" alt="modali logo" style={{ height: '250px'}} />
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <Button handleClick={toggleExampleModal}>
            Click me to open a Modal!
          </Button>
          <Modali {...exampleModal}>
            <div className="row my-3">
              <div className="col-12 d-flex justify-content-center">
                <h3>
                  I'm an example Modal 👋
                </h3>
              </div>
            </div>
          </Modali>
        </div>
      </div>
      <Installation />
      <BasicExample />
      <MultipleModalsExample />
      <OptionsModalsExample />
    </div>
  );
};

render(<App />, document.getElementById("root"));
