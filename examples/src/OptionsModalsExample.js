import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { options } from "./snippets/snippets";

import Modali, { useModali } from '../../src';
import Button from "./Button";

const OptionsModalsExample = () => {
  const [firstModal, toggleFirstModal] = useModali({
    onHide: () => alert(`I'm now hidden`),
    animated: true,
  });
  return (
    <div className="row mt-5">
      <div className="col-12">
        <h4>
          Modali Options
        </h4>
      </div>
      <div className="col-12 mt-2">
        <Button handleClick={toggleFirstModal}>
          Click me to open a modal with options
        </Button>
      </div>
      <div className="col-12">
        <SyntaxHighlighter language='jsx' style={okaidia}>{options}</SyntaxHighlighter>
      </div>
      <Modali {...firstModal}>
        <div className="row my-3">
          <div className="col-12 d-flex justify-content-center">
            <h3>
              I'm the first modal 🔥
            </h3>
          </div>
        </div>
      </Modali>
    </div>
  )
};
export default OptionsModalsExample;
