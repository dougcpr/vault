webpackHotUpdate("static/development/pages/register.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_CenterLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/CenterLayout */ "./src/layouts/CenterLayout.js");
/* harmony import */ var _layouts_DualButtonGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/DualButtonGrid */ "./src/layouts/DualButtonGrid.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "/Users/docooper/webdev/vault/src/pages/register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\t\ttext-decoration: underline;\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // layouts


 // components



 // router



var BackLink = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());
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
              return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');

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
              return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');

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

  return __jsx(_layouts_CenterLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    flat: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: username,
    label: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: password,
    type: "password",
    label: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: confirmPassword,
    type: "password",
    label: "Confirm Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: register,
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Register"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(BackLink, {
    onClick: back,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Back"), ".")));
});

/***/ })

})
//# sourceMappingURL=register.js.9b6df5500f6fbbd26920.hot-update.js.map