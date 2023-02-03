"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\nfunction RequestRow(param) {\n    var id = param.id, request = param.request, approversCount = param.approversCount, address = param.address;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell;\n    var onApprove = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var campaign, accounts;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__.getCampaign)(request.address)\n                        ];\n                    case 1:\n                        campaign = _state.sent();\n                        accounts = a;\n                        return [\n                            4,\n                            campaign.methods.approveRequest(id).send({\n                                address: address\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onApprove() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id + 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(request.value, \"ether\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: [\n                    request.approvalCount,\n                    \"/\",\n                    approversCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onClick: onApprove,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"red\",\n                    basic: true,\n                    children: \"Reject\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDd0I7QUFDQztBQUNmO0FBRXBDLFNBQVNLLFVBQVUsQ0FBQyxLQUF3QyxFQUFFO1FBQXhDQyxFQUFFLEdBQUosS0FBd0MsQ0FBdENBLEVBQUUsRUFBRUMsT0FBTyxHQUFiLEtBQXdDLENBQWxDQSxPQUFPLEVBQUVDLGNBQWMsR0FBN0IsS0FBd0MsQ0FBekJBLGNBQWMsRUFBRUMsT0FBTyxHQUF0QyxLQUF3QyxDQUFUQSxPQUFPO0lBQ3hELElBQVFDLEdBQUcsR0FBV1Isd0RBQVgsRUFBRVMsSUFBSSxHQUFLVCx5REFBTDtJQUVqQixJQUFNVSxTQUFTO21CQUFHLCtGQUFZO2dCQUN0QkMsUUFBUSxFQUNSQyxRQUFROzs7O3dCQURHOzs0QkFBTVgsK0RBQVcsQ0FBQ0ksT0FBTyxDQUFDRSxPQUFPLENBQUM7MEJBQUE7O3dCQUE3Q0ksUUFBUSxHQUFHLGFBQWtDO3dCQUM3Q0MsUUFBUSxHQUFHQyxDQUFDO3dCQUNsQjs7NEJBQU1GLFFBQVEsQ0FBQ0csT0FBTyxDQUFDQyxjQUFjLENBQUNYLEVBQUUsQ0FBQyxDQUFDWSxJQUFJLENBQUM7Z0NBQUVULE9BQU8sRUFBUEEsT0FBTzs2QkFBQyxDQUFDOzBCQUFBOzt3QkFBMUQsYUFBMEQ7Ozs7OztRQUM1RCxDQUFDO3dCQUpLRyxTQUFTOzs7T0FJZDtJQUVELHFCQUNFLDhEQUFDRixHQUFHOzswQkFDRiw4REFBQ0MsSUFBSTswQkFBRUwsRUFBRSxHQUFHLENBQUM7Ozs7O29CQUFROzBCQUNyQiw4REFBQ0ssSUFBSTswQkFBRUosT0FBTyxDQUFDWSxXQUFXOzs7OztvQkFBUTswQkFDbEMsOERBQUNSLElBQUk7MEJBQUVQLG9FQUFrQixDQUFDRyxPQUFPLENBQUNlLEtBQUssRUFBRSxPQUFPLENBQUM7Ozs7O29CQUFROzBCQUN6RCw4REFBQ1gsSUFBSTswQkFBRUosT0FBTyxDQUFDZ0IsU0FBUzs7Ozs7b0JBQVE7MEJBQ2hDLDhEQUFDWixJQUFJOztvQkFDRkosT0FBTyxDQUFDaUIsYUFBYTtvQkFBQyxHQUFDO29CQUFDaEIsY0FBYzs7Ozs7O29CQUNsQzswQkFDUCw4REFBQ0csSUFBSTswQkFDSCw0RUFBQ1YscURBQU07b0JBQUN3QixLQUFLLEVBQUMsT0FBTztvQkFBQ0MsS0FBSztvQkFBQ0MsT0FBTyxFQUFFZixTQUFTOzhCQUFFLFNBRWhEOzs7Ozt3QkFBUzs7Ozs7b0JBQ0o7MEJBQ1AsOERBQUNELElBQUk7MEJBQ0gsNEVBQUNWLHFEQUFNO29CQUFDd0IsS0FBSyxFQUFDLEtBQUs7b0JBQUNDLEtBQUs7OEJBQUMsUUFFMUI7Ozs7O3dCQUFTOzs7OztvQkFDSjs7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUM7QUE5QlFyQixLQUFBQSxVQUFVO0FBZ0NuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcz9jYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRDYW1wYWlnbiB9IGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdFJvdyh7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCwgYWRkcmVzcyB9KSB7XHJcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG5cclxuICBjb25zdCBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IGF3YWl0IGdldENhbXBhaWduKHJlcXVlc3QuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGFcclxuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QoaWQpLnNlbmQoeyBhZGRyZXNzfSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENlbGw+e2lkICsgMX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCBcImV0aGVyXCIpfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3JlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAge3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fVxyXG4gICAgICA8L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e29uQXBwcm92ZX0+XHJcbiAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInJlZFwiIGJhc2ljPlxyXG4gICAgICAgICAgUmVqZWN0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlRhYmxlIiwiZ2V0Q2FtcGFpZ24iLCJ3ZWIzIiwiUmVxdWVzdFJvdyIsImlkIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwiYWRkcmVzcyIsIlJvdyIsIkNlbGwiLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsImFjY291bnRzIiwiYSIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsInNlbmQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});