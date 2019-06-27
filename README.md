# 🦞 modali
A delightful modal dialog library for React, built from the ground up to support React Hooks. Modali provides a simple interface to build beautiful modals in minutes.

<p align="center">
  <img src="../assets/modali-logo.png" alt="drawing" width="400"/>
</p>

A full tutorial on [Modal Components in React Using Custom Hooks](https://upmostly.com/tutorials/modal-components-react-custom-hooks/) can be found over at https://upmostly.com

## Live Demo

https://upmostly.github.io/modali/

## Installation
Install Modali in your project using npm:

```
npm install --save modali
```

**⚠️ Modali uses React Hooks, therefore you are required to use React v16.8 or above when using Modali.**

## Usage

Import the `Modali` component and `useModali` Hook in your React components, like so:
```javascript
import Modali, { useModali } from 'modali';
```

After you've imported the Modali component and useModali Hook, you're ready to start using Modali inside your components! 🎉

### Basic Modal

```jsx
import React from 'react';
import Modali, { useModali } from 'modali';

const App = () => {
  const [exampleModal, toggleExampleModal] = useModali();

  return (
    <div className="app">
      <button onClick={toggleExampleModal}>
        Click me to open the modal
      </button>
      <Modali.Modal {...exampleModal}>
        Hi, I'm a Modali!
      </Modali.Modal>
    </div>
  );
};

export default App;

```

### Title, Message, and Buttons

Modali provides everything you need to build beautiful modals in minutes. Use the title, message and buttons props to customize your modal as quick as a flash! ⚡️

```jsx
import React from 'react';
import Modali, { useModali } from 'modali';

const App = () => {
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
        onClick={() => deleteUserWithId('123')}
      />,
    ],
  });

  return (
    <div className="app">
      <button onClick={toggleCompleteModal}>
        Click me to open the modal
      </button>
      <Modali.Modal {...completeExample} />
    </div>
  );
};

export default App;

```

### useModali Hook

Much like the useState Hook, the `useModali` Hook returns two values which can be named whatever you'd like:

- An object containing props which must be passed into the Modali component.
- A function to toggle the Modali component.

This is demonstrated in the example above, from the following line:
<br />
`const [exampleModal, toggleExampleModal] = useModali();`
- `exampleModal` is the props object. Again, this must be passed into the Modali component.
- `toggleExampleModal` is the function to show/hide Modali.

### <Modali.Modal /> Component

The `<Modali.Modal />` component provides a beautiful, WAI-ARIA accessible modal dialog out of the box. Import it, add it to your component tree, pass in the props object that you get from the useModali Hook and you're all set.

```jsx
...

const [exampleModal, toggleExampleModal] = useModali();

return (
  <Modali.Modal {...exampleModal}>
    Hi, I'm a Modali
  </Modali.Modal>
);

...

```

### <Modali.Button /> Component

The `<Modali.Button />` component provides a ready-to-go button component that includes three separate styles of button: default, cancel, and destructive.

```jsx
...

const [completeExample, toggleCompleteModal] = useModali({
  buttons: [
    <Modali.Button
      label="Done"
      isStyleDefault
      onClick={() => handleDoneClicked()}
    />,
    <Modali.Button
      label="Cancel"
      isStyleCancel
      onClick={() => toggleCompleteModal()}
    />,
    <Modali.Button
      label="Delete"
      isStyleDestructive
      onClick={() => deleteUserWithId('123')}
    />,
  ],
});

return (
  <Modali.Modal {...exampleModal}>
    Hi, I'm a Modali
  </Modali.Modal>
);

...

```
### <Modali.Button/> Props
| Prop | Description |
| --- | --- |
| `label` | String that is shown on the button |
| `isStyleDefault` | Pass in this prop as true to show the default button |
| `isStyleCancel` | Pass in this prop as true to show a cancel button |
| `isStyleDestructive` | Pass in this prop as true to show a delete button |
| `onClick` | Called when the button is clicked |

## More Examples

### Multiple Modals
This flexibility of being able to name the props object and toggle function allows us to use multiple Modalis in the same component:

```jsx
import React from 'react';
import Modali, { useModali } from 'modali';

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
      <Modali.Modal {...firstModal}>
        Hi, I'm the first Modali
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        And I'm the second Modali
      </Modali.Modal>
    </div>
  );
};

export default App;

```

## Modali Options

Modali provides an easy to use interface for accessing useful events, such as when the modal shows and hides.

### Events

| Event | Description |
| --- | --- |
| `onShow` | Called when the component finishes mounting to the DOM |
| `onHide` | Called when the component is removed from the DOM |
| `onEscapeKeyDown` | Called when the escape key is pressed while the component is mounted to the DOM |
| `onOverlayClick` | Called when the modal overlay back is clicked while the component is mounted to the DOM |

Example

```javascript
const [exampleModal, toggleExampleModal] = useModali({
  onShow: () => console.log('Modali is shown'),
  onHide: () => console.log('Modali is hidden')
});

```

Modali can be easily customized by passing in an object of key/value pairs to the useModali Hook's initializer:

### Props

| Option | Default Value | Description |
| --- | --- | --- |
| `title` | string | The text displayed in the upper left corner |
| `message` | string | The text displayed in the body of the modal |
| `buttons` | array | Displays whatever is passed in in the footer |
| `closeButton` | true | Controls the visibility of the close button |
| `animated` | false | Fades in the modal when it mounts to the DOM |
| `centered` | false | Positions the modal in the center of the screen |
| `large` | false | Changes the size of the modal to be 800px wide |
| `overlayClose` | true | Disables clicking the modal overlay to hide it |
| `keyboardClose` | true | Disables the ESC key hiding the modal |

Example

```javascript
const [exampleModal, toggleExampleModal] = useModali({
  animated: true,
  large: true,
  closeButton: false,
});

```

Of course, props and events can be combined when passing the options to the useModali Hook:

```javascript

function handleModalOnHide() {
  // do something when the modal hides
}

const [exampleModal, toggleExampleModal] = useModali({
  onHide: handleModalOnHide,
  large: true,
  closeButton: false,
});

```
