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

require('./modal.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modali = function Modali(_ref) {
  var isShown = _ref.isShown,
      hide = _ref.hide,
      options = _ref.options,
      children = _ref.children;


  function handleOverlayClicked() {
    if (options.onOverlayClicked) {
      options.onOverlayClicked();
    }
    if (options.overlayClose !== false) {
      hide();
    }
  }

  return isShown ? _reactDom2.default.createPortal(_react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('div', { className: 'modali-overlay', onClick: handleOverlayClicked }),
    _react2.default.createElement(
      'div',
      { className: 'modali-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'modali ' + (options && options.large ? 'modali-size-large' : 'modali-size-regular') + ' ' + (options && options.animated ? 'modali-animated modali-animation-fade-in' : ''), 'aria-modal': true, 'aria-hidden': true, tabIndex: -1, role: 'dialog' },
        options && options.closeButton !== false && _react2.default.createElement(
          'div',
          { className: 'modali-header' },
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
          children
        )
      )
    )
  ), document.body) : null;
};

exports.default = Modali;
var useModali = exports.useModali = function useModali(options) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasToggledBefore = _useState2[0],
      setHasToggledBefore = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShown = _useState4[0],
      setIsShown = _useState4[1];

  function handleKeyDown(event) {
    if (options && options.keyboardClose !== false && event.keyCode === 27) toggle();
  }

  (0, _react.useEffect)(function () {
    if (isShown) {
      options && options.onShow && options.onShow();
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modali-open');
    }
    if (!isShown && hasToggledBefore) {
      options && options.onHide && options.onHide();
      document.body.classList.remove('modali-open');
    }
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShown]);

  function toggle() {
    setIsShown(!isShown);
    setHasToggledBefore(true);
  }

  return [{
    isShown: isShown,
    hide: toggle,
    options: options
  }, toggle];
};