import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { completeExampleSnippet } from "./snippets/snippets";

import Modali, { useModali } from '../../src';
import Button from "./Button";

const CompleteExample = () => {
  const [completeExample, toggleCompleteModal] = useModali({
    animated: true,
    title: 'Are you sure?',
    message: 'Deleting this user will be permanent.',
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleCompleteModal()}
      />,
      <Modali.Button
        label="Delete"
        isStyleDestructive
        onClick={() => alert('User deleted!')}
      />,
    ],
  });
  return (
    <div className="row mt-5">
      <div className="col-12">
        <h4>
          Complete Example
        </h4>
      </div>
      <div className="col-12 mt-2">
        <Button handleClick={toggleCompleteModal}>
          Click me to open a complete modal
        </Button>
      </div>
      <div className="col-12">
        <SyntaxHighlighter language='jsx' style={okaidia}>{completeExampleSnippet}</SyntaxHighlighter>
      </div>
      <Modali.Modal {...completeExample} />
    </div>
  )
};
export default CompleteExample;
