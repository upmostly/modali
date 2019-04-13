import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modali.css';

const Button = ({ onClick, label, isStyleDefault, isStyleCancel, isStyleDestructive }) => (
  <button
    className={`modali-button ${isStyleCancel && 'modali-button-cancel'} ${isStyleDefault && 'modali-button-default'} ${isStyleDestructive && 'modali-button-destructive'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Modali = () => {};

const Modal = ({ isShown, hide, options, children }) => {

  function handleOverlayClicked(e) {
    if (e.target.className !== 'modali-wrapper') {
      return;
    }
    if (options === undefined) {
      hide();
    } else {
      if (options.overlayClose !== false) {
        hide();
      }
      if (options.onOverlayClicked) {
        options.onOverlayClicked();
      }
    }
  }

  function renderBody() {
    if (children) {
      return children;
    } else if (options !== undefined && options.message !== undefined) {
      return (
        <div className="modali-body-style">
          {options.message}
        </div>
      );
    }
  }

  function renderFooter() {
    const { buttons } = options;
    return (
      <div className="modali-footer">
        {buttons.map((button, index) => (
          <React.Fragment
            key={`modali-button-${index}`}
          >
            {button}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return isShown ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modali-overlay"/>
      <div className="modali-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={handleOverlayClicked}>
        <div className={`modali ${options && options.large ? 'modali-size-large' : 'modali-size-regular'} ${options && options.animated ? 'modali-animated modali-animation-fade-in' : ''}`}>
          <div className="modali-content">
            {options !== undefined && options.closeButton === false ? null : (
              <div className="modali-header">
                {options !== undefined && options.title !== undefined && (
                  <div className="modali-title">
                    {options.title}
                  </div>
                )}
                <button type="button" className="modali-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <div className="modali-body">
              {renderBody()}
            </div>
            {options !== undefined && options.buttons !== undefined && options.buttons.length > 0 && renderFooter()}
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;
};

Modali.Button = Button;
Modali.Modal = Modal;
export default Modali;

export const useModali = (options) => {
  const [hasToggledBefore, setHasToggledBefore] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function handleKeyDown(event) {
    if (options === undefined && event.keyCode === 27) {
      toggle();
    }
    if (options !== undefined && options.keyboardClose === true && event.keyCode === 27) {
      toggle();
    }
    if (options !== undefined && options.onEscapeKeyDown) {
      options.onEscapeKeyDown();
      toggle();
    }
  }

  useEffect(() => {
    if (isShown) {
      options && options.onShow && options.onShow();
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modali-open');
    }
    if (!isShown && hasToggledBefore) {
      options && options.onHide && options.onHide();
      document.body.classList.remove('modali-open');
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isShown]);

  function toggle() {
    setIsShown(!isShown);
    setHasToggledBefore(true);
  }

  return [
    {
      isShown,
      hide: toggle,
      options,
    },
    toggle,
  ]
};

