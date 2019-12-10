webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/docooper/webdev/vault/src/components/Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var containsTextMixin = function containsTextMixin(_ref) {
  var containsText = _ref.containsText;
  var myStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["& + label{background-color:inherit;bottom:3.5rem;left:0.4375rem;color:", ";font-size:0.6875rem;margin:0.3125rem;padding:0 0.3125rem;position:relative;}border:0.0625rem solid ", ";"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors["default"];
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors["default"];
  });
  return containsText ? myStyles : null;
};

var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Input__InputContainer",
  componentId: "ds2n35-0"
})(["background-color:", ";height:3.5625rem;width:100%;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white;
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "Input",
  componentId: "ds2n35-1"
})(["border:0.0625rem solid ", ";border-radius:0.5rem;box-sizing:border-box;font-size:1rem;outline:none;padding:0.75rem 1rem 0.875rem;width:100%;&:disabled{background-color:", ";pointer-events:none;}&:disabled + label{background-color:", ";pointer-events:none;}&::placeholder,label{color:", "}&:focus:not(:disabled){border:0.0625rem solid ", ";transition:0.2s both;position:relative;}&:hover:not(:focus):not(:disabled){border:0.0625rem solid ", ";transition:0.2s;}&:focus:not(:disabled):empty + label{background-color:inherit;bottom:3.5rem;color:", ";font-size:0.6875rem;left:0.4375rem;margin:0.3125rem;transition:0.2s;padding:0 0.3125rem;position:relative;}", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors["default"];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.disabled;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.disabled;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors["default"];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.green;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.input_border_hover;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.green;
}, function (props) {
  return containsTextMixin(props);
});
var Label = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "Input__Label",
  componentId: "ds2n35-2"
})(["background-color:inherit;bottom:2rem;border-radius:0.1875rem;color:", ";left:1.25rem;letter-spacing:0.009375em;pointer-events:none;position:relative;transition:0.3s;"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors["default"];
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  function handleInputChange(e) {
    var value = e.target.value;
    setContainsText(value.length > 0);
    setInputValue(value);
  }

  var disabled = props.disabled,
      label = props.label,
      type = props.type,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      RemainingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disabled", "label", "type", "value"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value.length > 0),
      containsText = _useState2[0],
      setContainsText = _useState2[1];

  return __jsx(InputContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(Input, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    containsText: containsText,
    type: type,
    defaultValue: inputValue,
    disabled: disabled,
    onInputCapture: function onInputCapture(event) {
      return handleInputChange(event);
    }
  }, RemainingProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, label));
});

/***/ })

})
//# sourceMappingURL=login.js.5ff494608d5c352cff8b.hot-update.js.map