webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/docooper/webdev/vault/src/components/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var blockClassMixin = function blockClassMixin(_ref) {
  var isBlockButton = _ref.isBlockButton;
  var blockStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["max-width:100%;"]);
  return isBlockButton ? blockStyle : null;
};

var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Button",
  componentId: "hanfih-0"
})(["background-color:", ";border:none;border-radius:0.25rem;color:", ";cursor:pointer;font-size:", ";font-weight:500;display:block;max-height:2.25rem;min-width:6.25rem;max-width:9.375rem;outline:none;padding:0.625rem 1rem;text-align:center;text-transform:capitalize;width:100%;button.block:not(:disabled){max-width:100%;}&:disabled{background-color:", ";border-bottom-color:", ";color:", ";pointer-events:none;}&:hover{filter:brightness(105%);}&:active{filter:brightness(95%);}", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.green;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.font_medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.button_disabled_bg;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.button_disabled;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.button_disabled;
}, function (props) {
  return blockClassMixin(props);
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var disabled = props.disabled,
      block = props.block,
      RemainingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disabled", "block"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(block),
      isBlockButton = _useState[0],
      setBlockClass = _useState[1];

  return __jsx(Button, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    block: isBlockButton,
    disabled: disabled
  }, RemainingProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), props.children);
});

/***/ })

})
//# sourceMappingURL=login.js.f9f1f05385cfa98343ee.hot-update.js.map