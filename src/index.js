import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modali = ({ isShown, hide, options, children }) => {

  function handleOverlayClicked() {
    if (options.onOverlayClicked) {
      options.onOverlayClicked();
    }
    if (options.overlayClose !== false) {
      hide();
    }
  }

  return isShown ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modali-overlay" onClick={handleOverlayClicked} />
      <div className="modali-wrapper">
        <div className={`modali ${options && options.large ? 'modali-size-large' : 'modali-size-regular'} ${options && options.animated ? 'modali-animated modali-animation-fade-in' : ''}`} aria-modal aria-hidden tabIndex={-1} role="dialog">
          {options && options.closeButton !== false && (
            <div className="modali-header">
              <button type="button" className="modali-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <div className="modali-body">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;
};

export default Modali;

export const useModali = (options) => {
  const [hasToggledBefore, setHasToggledBefore] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function handleKeyDown(event) {
    if (options && options.keyboardClose !== false && event.keyCode === 27) toggle();
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

