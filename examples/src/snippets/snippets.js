export const installation = `npm install --save modali`;

export const usage = `import Modali, { useModali } from 'modali';`;

export const basicExample = 'import React from \'react\';\n' +
  'import Modali, { useModali } from \'modali\';\n' +
  '\n' +
  'const App = () => {\n' +
  '  const [exampleModal, toggleExampleModal] = useModali();\n' +
  '\n' +
  '  return (\n' +
  '    <div className="app">\n' +
  '      <button onClick={toggleExampleModal}>\n' +
  '        Click me to open the modal\n' +
  '      </button>\n' +
  '      <Modali {...exampleModal}>\n' +
  '        Hi, I\'m a Modali!\n' +
  '      </Modali>\n' +
  '    </div>\n' +
  '  );\n' +
  '};\n' +
  '\n' +
  'export default App;';

export const multiple = 'import React from \'react\';\n' +
  'import Modali, { useModali } from \'modali\';\n' +
  '\n' +
  'const App = () => {\n' +
  '  const [firstModal, toggleFirstModal] = useModali();\n' +
  '  const [secondModal, toggleSecondModal] = useModali();\n' +
  '  \n' +
  '  return (\n' +
  '    <div className="app">\n' +
  '      <button onClick={toggleFirstModal}>\n' +
  '        Click me to open the first modal!\n' +
  '      </button>\n' +
  '      <button onClick={toggleSecondModal}>\n' +
  '        Click me to open the second modal!\n' +
  '      </button>\n' +
  '      <Modali {...firstModal}>\n' +
  '        Hi, I\'m the first Modali\n' +
  '      </Modali>\n' +
  '      <Modali {...secondModal}>\n' +
  '        And I\'m the second Modali\n' +
  '      </Modali>\n' +
  '    </div>\n' +
  '  );\n' +
  '};\n' +
  '\n' +
  'export default App;';

export const options = 'const [exampleModal, toggleExampleModal] = useModali({\n' +
  '  animated: true,\n' +
  '  large: true,\n' +
  '  closeButton: false,\n' +
  '  onHide: () => alert(`I\'m hidden`),\n' +
  '});';
