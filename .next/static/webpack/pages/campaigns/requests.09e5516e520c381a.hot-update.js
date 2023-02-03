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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\nfunction RequestRow(param) {\n    var id = param.id, request = param.request, approversCount = param.approversCount, address = param.address;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell;\n    var onApprove = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var campaign, accounts;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__.getCampaign)(address)\n                        ];\n                    case 1:\n                        campaign = _state.sent();\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts()\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        return [\n                            4,\n                            campaign.methods.approveRequest(id).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onApprove() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id + 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(request.value, \"ether\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: [\n                    request.approvalCount,\n                    \"/\",\n                    approversCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onClick: onApprove,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"teal\",\n                    basic: true,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jonyj\\\\Documents\\\\Courses\\\\Web3\\\\kickstart-app\\\\kickstart\\\\components\\\\RequestRow.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDd0I7QUFDQztBQUNmO0FBRXBDLFNBQVNLLFVBQVUsQ0FBQyxLQUF3QyxFQUFFO1FBQXhDQyxFQUFFLEdBQUosS0FBd0MsQ0FBdENBLEVBQUUsRUFBRUMsT0FBTyxHQUFiLEtBQXdDLENBQWxDQSxPQUFPLEVBQUVDLGNBQWMsR0FBN0IsS0FBd0MsQ0FBekJBLGNBQWMsRUFBRUMsT0FBTyxHQUF0QyxLQUF3QyxDQUFUQSxPQUFPO0lBQ3hELElBQVFDLEdBQUcsR0FBV1Isd0RBQVgsRUFBRVMsSUFBSSxHQUFLVCx5REFBTDtJQUVqQixJQUFNVSxTQUFTO21CQUFHLCtGQUFZO2dCQUN0QkMsUUFBUSxFQUNSQyxRQUFROzs7O3dCQURHOzs0QkFBTVgsK0RBQVcsQ0FBQ00sT0FBTyxDQUFDOzBCQUFBOzt3QkFBckNJLFFBQVEsR0FBRyxhQUEwQjt3QkFDMUI7OzRCQUFNVCxzRUFBb0IsRUFBRTswQkFBQTs7d0JBQXZDVSxRQUFRLEdBQUcsYUFBNEI7d0JBQzdDOzs0QkFBTUQsUUFBUSxDQUFDSSxPQUFPLENBQUNDLGNBQWMsQ0FBQ1osRUFBRSxDQUFDLENBQUNhLElBQUksQ0FBQztnQ0FBRUMsSUFBSSxFQUFFTixRQUFRLENBQUMsQ0FBQyxDQUFDOzZCQUFFLENBQUM7MEJBQUE7O3dCQUFyRSxhQUFxRSxDQUFDOzs7Ozs7UUFDeEUsQ0FBQzt3QkFKS0YsU0FBUzs7O09BSWQ7SUFFRCxxQkFDRSw4REFBQ0YsR0FBRzs7MEJBQ0YsOERBQUNDLElBQUk7MEJBQUVMLEVBQUUsR0FBRyxDQUFDOzs7OztvQkFBUTswQkFDckIsOERBQUNLLElBQUk7MEJBQUVKLE9BQU8sQ0FBQ2MsV0FBVzs7Ozs7b0JBQVE7MEJBQ2xDLDhEQUFDVixJQUFJOzBCQUFFUCxvRUFBa0IsQ0FBQ0csT0FBTyxDQUFDaUIsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7Ozs7b0JBQVE7MEJBQ3pELDhEQUFDYixJQUFJOzBCQUFFSixPQUFPLENBQUNrQixTQUFTOzs7OztvQkFBUTswQkFDaEMsOERBQUNkLElBQUk7O29CQUNGSixPQUFPLENBQUNtQixhQUFhO29CQUFDLEdBQUM7b0JBQUNsQixjQUFjOzs7Ozs7b0JBQ2xDOzBCQUNQLDhEQUFDRyxJQUFJOzBCQUNILDRFQUFDVixxREFBTTtvQkFBQzBCLEtBQUssRUFBQyxPQUFPO29CQUFDQyxLQUFLO29CQUFDQyxPQUFPLEVBQUVqQixTQUFTOzhCQUFFLFNBRWhEOzs7Ozt3QkFBUzs7Ozs7b0JBQ0o7MEJBQ1AsOERBQUNELElBQUk7MEJBQ0gsNEVBQUNWLHFEQUFNO29CQUFDMEIsS0FBSyxFQUFDLE1BQU07b0JBQUNDLEtBQUs7OEJBQUMsVUFFM0I7Ozs7O3dCQUFTOzs7OztvQkFDSjs7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUM7QUE5QlF2QixLQUFBQSxVQUFVO0FBZ0NuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcz9jYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRDYW1wYWlnbiB9IGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdFJvdyh7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCwgYWRkcmVzcyB9KSB7XHJcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG5cclxuICBjb25zdCBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IGF3YWl0IGdldENhbXBhaWduKGFkZHJlc3MpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdChpZCkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93PlxyXG4gICAgICA8Q2VsbD57aWQgKyAxfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsIFwiZXRoZXJcIil9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICB7cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17b25BcHByb3ZlfT5cclxuICAgICAgICAgIEFwcHJvdmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIGJhc2ljPlxyXG4gICAgICAgICAgRmluYWxpemVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DZWxsPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiVGFibGUiLCJnZXRDYW1wYWlnbiIsIndlYjMiLCJSZXF1ZXN0Um93IiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJhZGRyZXNzIiwiUm93IiwiQ2VsbCIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJjb2xvciIsImJhc2ljIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});