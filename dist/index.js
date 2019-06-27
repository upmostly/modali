'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModali = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

require('./modali.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      isStyleDefault = _ref.isStyleDefault,
      isStyleCancel = _ref.isStyleCancel,
      isStyleDestructive = _ref.isStyleDestructive;

  var buttonClass = (0, _classnames2.default)({
    'modali-button': true,
    'modali-button-cancel': isStyleCancel,
    'modali-button-default': isStyleDefault,
    'modali-button-destructive': isStyleDestructive
  });
  return _react2.default.createElement(
    'button',
    {
      type: 'button',
      className: buttonClass,
      onClick: onClick
    },
    label
  );
};

Button.defaultProps = {
  isStyleDefault: false,
  isStyleCancel: false,
  isStyleDestructive: false
};

Button.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string.isRequired,
  isStyleDefault: _propTypes2.default.bool,
  isStyleCancel: _propTypes2.default.bool,
  isStyleDestructive: _propTypes2.default.bool
};

var Modal = function Modal(_ref2) {
  var isModalVisible = _ref2.isModalVisible,
      hide = _ref2.hide,
      options = _ref2.options,
      children = _ref2.children;

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
    }if (options && options.message) {
      return _react2.default.createElement(
        'div',
        { className: 'modali-body-style' },
        options.message
      );
    }
    return false;
  }

  function renderFooter() {
    var buttons = options.buttons;

    return _react2.default.createElement(
      'div',
      { className: 'modali-footer' },
      buttons.map(function (button) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          {
            key: _shortid2.default.generate()
          },
          button
        );
      })
    );
  }

  var modaliWrapperClass = (0, _classnames2.default)({
    'modali-wrapper': true,
    'modali-wrapper-centered': options && options.centered
  });

  var modaliClass = (0, _classnames2.default)({
    modali: true,
    'modali-size-large': options && options.large,
    'modali-size-regular': !options || options && !options.large,
    'modali-animated modali-animation-fade-in': options && options.animated
  });

  return isModalVisible ? _reactDom2.default.createPortal(_react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('div', { className: 'modali-overlay' }),
    _react2.default.createElement(
      'div',
      { className: modaliWrapperClass, 'aria-modal': true, 'aria-hidden': true, tabIndex: -1, role: 'dialog', onClick: handleOverlayClicked },
      _react2.default.createElement(
        'div',
        { className: modaliClass },
        _react2.default.createElement(
          'div',
          { className: 'modali-content' },
          options !== undefined && options.closeButton === false ? null : _react2.default.createElement(
            'div',
            { className: 'modali-header' },
            options !== undefined && options.title !== undefined && _react2.default.createElement(
              'div',
              { className: 'modali-title' },
              options.title
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'modali-close-button', 'data-dismiss': 'modal', 'aria-label': 'Close', onClick: hide },
              _react2.default.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '\xD7'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modali-body' },
            renderBody()
          ),
          options && options.buttons && options.buttons.length > 0 && renderFooter()
        )
      )
    )
  ), document.body) : null;
};

var Modali = function Modali() {};
Modali.Button = Button;
Modali.Modal = Modal;
exports.default = Modali;
var useModali = exports.useModali = function useModali(options) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasToggledBefore = _useState2[0],
      setHasToggledBefore = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isModalVisible = _useState4[0],
      setIsModalVisible = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isShown = _useState6[0],
      setIsShown = _useState6[1];

  var isModalVisibleRef = (0, _react.useRef)(isModalVisible);
  isModalVisibleRef.current = isModalVisible;
  var timeoutHack = void 0;

  function toggle() {
    timeoutHack = setTimeout(function () {
      setIsModalVisible(!isModalVisibleRef.current);
      clearTimeout(timeoutHack);
    }, 10);
    setIsShown(!isShown);
    setHasToggledBefore(true);
  }

  function handleKeyDown(event) {
    if (event.keyCode !== 27 || options && options.keyboardClose === false) return;
    toggle();
    if (options && options.onEscapeKeyDown) {
      options.onEscapeKeyDown();
    }
  }

  (0, _react.useEffect)(function () {
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
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShown]);

  return [{
    isShown: isShown,
    isModalVisible: isModalVisible,
    hide: toggle,
    options: options
  }, toggle];
};