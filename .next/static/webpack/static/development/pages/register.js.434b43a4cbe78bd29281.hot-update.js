webpackHotUpdate("static/development/pages/register.js",{

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




var isFlatMixin = function isFlatMixin(_ref) {
  var props = _ref.props;
  var nonFlatCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["box-shadow:", ""], function (_ref2) {
    var theme = _ref2.theme;
    theme.style.box_shadow;
  });
  return props.flat ? nonFlatCard : null;
};

var Card = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Card",
  componentId: "sc-1rpygc8-0"
})(["border-radius:0.1875rem;background-color:", ";box-sizing:border-box;color:", ";display:flex;flex-direction:column;margin:0;min-width:6.25rem;max-width:15.625rem;overflow:hidden;padding:0.75rem 1rem 0.75rem 0.875rem;transition:1s ease-in-out;width:100%;justify-content:space-around;", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors["default"];
}, function (props) {
  return isFlatMixin(props);
});
var Subject = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Card__Subject",
  componentId: "sc-1rpygc8-1"
})(["color:", ";margin-bottom:0.25rem;text-align:center;"], function (_ref5) {
  var theme = _ref5.theme;
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

/***/ }),

/***/ "./src/pages/register.js":
/*!*******************************!*\
  !*** ./src/pages/register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_CenterLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/CenterLayout */ "./src/layouts/CenterLayout.js");
/* harmony import */ var _layouts_DualButtonGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/DualButtonGrid */ "./src/layouts/DualButtonGrid.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/Users/docooper/webdev/vault/src/pages/register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // layouts


 // components



 // router


/* harmony default export */ __webpack_exports__["default"] = (function () {
  function back() {
    return _back.apply(this, arguments);
  }

  function _back() {
    _back = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _back.apply(this, arguments);
  }

  function register() {
    return _register.apply(this, arguments);
  }

  function _register() {
    _register = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _register.apply(this, arguments);
  }

  var _ref = '',
      _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 3),
      username = _ref2[0],
      password = _ref2[1],
      confirmPassword = _ref2[2];

  return __jsx(_layouts_CenterLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flat: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: username,
    label: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: password,
    type: "password",
    label: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: confirmPassword,
    type: "password",
    label: "Confirm Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_layouts_DualButtonGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: back,
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Back"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: register,
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Register"))));
});

/***/ })

})
//# sourceMappingURL=register.js.434b43a4cbe78bd29281.hot-update.js.map