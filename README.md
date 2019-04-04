# Modali
🦞 A delightfully simple modal dialog for React, built from the ground up to support React Hooks.

## Installation
Install Modali in your project using npm:

```
npm install --save react-modali
```
Or yarn:
```
yarn add react-modali
```

**Modali uses React Hooks, therefore you are required to use React v16.8 or above when using Modali.**

## Usage

Import the `Modali` component and `useModali` Hook in your React components, like so:
```javascript
import Modali, { useModali } from 'react-modali';
```

After you've imported the Modali component and useModali Hook, you're ready to start using Modali inside your components! 🎉

### Basic Modal

```jsx
import React from 'react';
import Modali, { useModali } from 'react-modali';

const App = () => {
  const [exampleModal, toggleExampleModal] = useModali();

  return (
    <div className="app">
      <button onClick={toggleExampleModal}>
        Click me to open the modal
      </button>
      <Modali {...exampleModal}>
        Hi, I'm a Modali!
      </Modali>
    </div>
  );
};

export default App;

```
### useModali Hook

Much like the useState Hook, the `useModali` Hook returns two values which can be named whatever you'd like:

- An object containing props which must be passed into the Modali component.
- A function to show and hide the the Modali component.

This is demonstrated in the example above, with the following line:
<br />
`const [exampleModal, toggleExampleModal] = useModali();`
- `exampleModal` is the props object. Again, this must be passed into the Modali component.
- `toggleExampleModal` is the function to show/hide Modali.

### Multiple Modals
This flexibility of being able to name the props object and toggle function allows us to use multiple Modalis in the same component:

```jsx
import React from 'react';
import Modali, { useModali } from 'react-modali';

const App = () => {
  const [firstModal, toggleFirstModal] = useModali();
  const [secondModal, toggleSecondModal] = useModali();
  
  return (
    <div className="app">
      <button onClick={toggleFirstModal}>
        Click me to open the first modal!
      </button>
      <button onClick={toggleSecondModal}>
        Click me to open the second modal!
      </button>
      <Modali {...firstModal}>
        Hi, I'm the first Modali
      </Modali>
      <Modali {...secondModal}>
        And I'm the second Modali
      </Modali>
    </div>
  );
};

export default App;

```
