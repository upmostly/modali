import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import './modali.css';

const Button = ({
  onClick, label, isStyleDefault, isStyleCancel, isStyleDestructive,
}) => {
  const buttonClass = classNames({
    'modali-button': true,
    'modali-button-cancel': isStyleCancel,
    'modali-button-default': isStyleDefault,
    'modali-button-destructive': isStyleDestructive,
  });
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  isStyleDefault: false,
  isStyleCancel: false,
  isStyleDestructive: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isStyleDefault: PropTypes.bool,
  isStyleCancel: PropTypes.bool,
  isStyleDestructive: PropTypes.bool,
};

const Modal = ({
  isModalVisible, hide, options, children,
}) => {
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
    } if (options && options.message) {
      return (
        <div className="modali-body-style">
          {options.message}
        </div>
      );
    }
    return false;
  }

  function renderFooter() {
    const { buttons } = options;
    return (
      <div className="modali-footer">
        {buttons.map(button => (
          <React.Fragment
            key={shortid.generate()}
          >
            {button}
          </React.Fragment>
        ))}
      </div>
    );
  }

  const modaliWrapperClass = classNames({
    'modali-wrapper': true,
    'modali-wrapper-centered': options && options.centered,
  });

  const modaliClass = classNames({
    modali: true,
    'modali-size-large': options && options.large,
    'modali-size-regular': !options || (options && !options.large),
    'modali-animated modali-animation-fade-in': options && options.animated,
  });

  return isModalVisible ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modali-overlay" />
      <div className={modaliWrapperClass} aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={handleOverlayClicked}>
        <div className={modaliClass}>
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
            {options && options.buttons && options.buttons.length > 0 && renderFooter()}
          </div>
        </div>
      </div>
    </React.Fragment>, document.body,
  ) : null;
};

const Modali = () => {};
Modali.Button = Button;
Modali.Modal = Modal;
export default Modali;

export const useModali = (options) => {
  const [hasToggledBefore, setHasToggledBefore] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const isModalVisibleRef = useRef(isModalVisible);
  isModalVisibleRef.current = isModalVisible;
  let timeoutHack;

  const toggle = useCallback(() => {
    timeoutHack = setTimeout(() => {
      setIsModalVisible(!isModalVisibleRef.current);
      clearTimeout(timeoutHack);
    }, 10);
    setIsShown(isShown => !isShown);
    setHasToggledBefore(true);
  }, [])

  function handleKeyDown(event) {
    if (event.keyCode !== 27 || (options && options.keyboardClose === false)) return;
    toggle();
    if (options && options.onEscapeKeyDown) {
      options.onEscapeKeyDown();
    }
  }

  useEffect(() => {
    if (isShown) {
      if (options && options.onShow) {
        options.onShow();
      }
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modali-open');
    }
    if (!isShown && hasToggledBefore) {
      if (options && options.onHide) {
        options.onHide();
      }
      document.body.classList.remove('modali-open');
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isShown]);

  return [
    {
      isShown,
      isModalVisible,
      hide: toggle,
      options,
    },
    toggle,
  ];
};
