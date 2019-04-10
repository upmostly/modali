import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { installation, usage } from "./snippets/snippets";

const Installation = () => {
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-12">
          <h4>
            Installation
          </h4>
        </div>
        <div className="col-12 mt-2">
          <p>
            Install Modali in your project using npm:
          </p>
        </div>
        <div className="col-12">
          <SyntaxHighlighter language='javascript' style={okaidia}>{installation}</SyntaxHighlighter>
        </div>
        <div className="col-12 mt-2">
          <p>
            ⚠️ Modali uses React Hooks, therefore you are required to use React v16.8 or above when using Modali.
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <h4>
            Usage
          </h4>
        </div>
        <div className="col-12 mt-2">
          <p>
            Import the Modali component and useModali Hook in your React components, like so:
          </p>
        </div>
        <div className="col-12">
          <SyntaxHighlighter language='javascript' style={okaidia}>{usage}</SyntaxHighlighter>
          After you've imported the Modali component and useModali Hook, you're ready to start using Modali inside your components! 🎉
        </div>
      </div>
    </React.Fragment>
  )
};

export default Installation;
