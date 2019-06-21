import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { basicExample } from './snippets/snippets';

import Modali, { useModali } from '../../src';
import Button from './Button';

const BasicExample = () => {
  const [exampleModal, toggleExampleModal] = useModali();
  return (
    <div className="row mt-5">
      <div className="col-12">
        <h4>
          Basic Example
        </h4>
      </div>
      <div className="col-12 mt-2">
        <Button handleClick={toggleExampleModal}>
          Click me to open a basic modal
        </Button>
      </div>
      <div className="col-12">
        <SyntaxHighlighter language="jsx" style={okaidia}>{basicExample}</SyntaxHighlighter>
      </div>
      <Modali.Modal {...exampleModal}>
        <div className="row my-3">
          <div className="col-12 d-flex justify-content-center">
            <p>
              Hi, I'm a Modal232i! 👋
            </p>
          </div>
        </div>
      </Modali.Modal>
    </div>
  );
};
export default BasicExample;
