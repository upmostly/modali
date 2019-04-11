import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { basicExample } from "./snippets/snippets";

import Modali, { useModali } from '../../src';
import Button from "./Button";

const BasicExample = () => {
  const [exampleModal, toggleExampleModal] = useModali({
    animated: true,
    title: 'Are you sure?',
    message: 'Deleting this user will be permanent.',
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleExampleModal()}
      />,
      <Modali.Button
        label="Delete"
        isStyleDestructive
        onClick={() => toggleExampleModal()}
      />,
    ],
  });
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
        <SyntaxHighlighter language='jsx' style={okaidia}>{basicExample}</SyntaxHighlighter>
      </div>
      <Modali {...exampleModal} />
    </div>
  )
};
export default BasicExample;
