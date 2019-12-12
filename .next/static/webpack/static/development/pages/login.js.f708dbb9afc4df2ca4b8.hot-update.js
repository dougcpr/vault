webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");


var _jsxFileName = "/Users/docooper/webdev/vault/src/components/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var isFlatMixin = function isFlatMixin(props) {
  var cardShadow = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["box-shadow:", ""], function (_ref) {
    var theme = _ref.theme;
    return theme.style.box_shadow;
  });
  return props.flat ? cardShadow : null;
};

var Card = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Card",
  componentId: "sc-1rpygc8-0"
})(["border-radius:0.1875rem;background-color:", ";box-sizing:border-box;color:", ";display:flex;flex-direction:column;margin:0;min-width:6.25rem;max-width:15.625rem;overflow:hidden;padding:0.75rem 1rem 0.75rem 0.875rem;transition:1s ease-in-out;width:100%;justify-content:space-around;", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors["default"];
}, function (props) {
  return isFlatMixin(props);
});
var Subject = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Card__Subject",
  componentId: "sc-1rpygc8-1"
})(["color:", ";margin-bottom:0.25rem;text-align:center;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.black;
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var subject = props.subject,
      flat = props.flat,
      RemainingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["subject", "flat"]);

  return __jsx(Card, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, RemainingProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    flat: flat,
    key: props.children,
    initial: {
      x: 300,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    },
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    },
    exit: {
      x: -300,
      opacity: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(Subject, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, subject), props.children)));
});

/***/ })

})
//# sourceMappingURL=login.js.f708dbb9afc4df2ca4b8.hot-update.js.map