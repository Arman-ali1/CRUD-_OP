"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Update/page",{

/***/ "(app-pages-browser)/./src/app/Update/page.js":
/*!********************************!*\
  !*** ./src/app/Update/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction page() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const idUpdate = searchParams.get(\"idUpdate\");\n    console.log(\"greetinggggggggggggggggggggggg in update component\", idUpdate);\n    const id = idUpdate;\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [_class, setClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleUpdate = ()=>{\n        console.log(\"update\");\n        //update api\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:8000/api/v1/updateStudent\", {\n            id,\n            name,\n            _class\n        }).then((res)=>{\n            console.log(\"success==\", res.data);\n            // setName(res.data.name)\n            // setClass(res.data._class)\n            // setRoll(res.data.roll_number)\n            alert(\"data Updated successfuly\");\n            router.push(\"/\");\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen flex flex-col items-center justify-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center p-4 font-serif text-2xl font-bold\",\n                        children: \"Update Student detail\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-950   w-80 rounded-xl shadow-xl shadow-green-300 flex flex-col justify-center items-center  m-10 mb-52 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-white\",\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: (e)=>setName(e.target.value),\n                                                type: \"name\",\n                                                className: \"bg-gray-700 p-2 rounded-lg w-60\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-white\",\n                                                children: \"Class\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: (e)=>setClass(e.target.value),\n                                                type: \"class\",\n                                                className: \"bg-gray-700 p-2 rounded-lg w-60\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleUpdate,\n                                    className: \"bg-blue-500 rounded-lg p-2 text-white px-8\",\n                                    children: \"Update\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Update\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Be5tHQeSPIf0c5ZIB3RrBrCSYDs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvVXBkYXRlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV5QjtBQUNlO0FBQ1I7QUFDUTtBQUVVO0FBRXpCO0FBRXpCLFNBQVNNOztJQUNMLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxXQUFXRCxhQUFhRSxHQUFHLENBQUM7SUFDbENDLFFBQVFDLEdBQUcsQ0FBQyxzREFBcURIO0lBQ2pFLE1BQU1JLEtBQUdKO0lBRVQsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsUUFBUUMsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNZSxTQUFPZCxzREFBU0E7SUFFdEIsTUFBTWUsZUFBYTtRQUNmUixRQUFRQyxHQUFHLENBQUM7UUFDWixZQUFZO1FBQ1pOLDZDQUFLQSxDQUFDYyxJQUFJLENBQUMsOENBQTZDO1lBQ3BEUDtZQUNBQztZQUNBRTtRQUNKLEdBQ0NLLElBQUksQ0FBQyxDQUFDQztZQUNIWCxRQUFRQyxHQUFHLENBQUMsYUFBWVUsSUFBSUMsSUFBSTtZQUNoQyx5QkFBeUI7WUFDekIsNEJBQTRCO1lBQzVCLGdDQUFnQztZQUNoQ0MsTUFBTTtZQUNOTixPQUFPTyxJQUFJLENBQUM7UUFFaEIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ0poQixRQUFRQyxHQUFHLENBQUNlO1FBRWhCO0lBRUo7SUFDRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFXOztrQ0FDViw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWdEOzs7Ozs7a0NBQzlELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEOztrREFDRyw4REFBQ0E7d0NBQUlDLFdBQVU7OzBEQUNmLDhEQUFDRTtnREFBTUYsV0FBVTswREFBYTs7Ozs7OzBEQUM5Qiw4REFBQ0c7Z0RBQU1DLFVBQVUsQ0FBQ0MsSUFBTW5CLFFBQVFtQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0RBQUdDLE1BQUs7Z0RBQU9SLFdBQVU7Ozs7Ozs7Ozs7OztrREFFdkUsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDZiw4REFBQ0U7Z0RBQU1GLFdBQVU7MERBQWE7Ozs7OzswREFDOUIsOERBQUNHO2dEQUFNQyxVQUFVLENBQUNDLElBQU1qQixTQUFTaUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dEQUFHQyxNQUFLO2dEQUFRUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSzdFLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ1M7b0NBQU9DLFNBQVNwQjtvQ0FBY1UsV0FBVTs4Q0FBNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsRyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUMzQiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkI7R0E1RFNLOztRQUNnQkYsNERBQWVBO1FBT3ZCRCxrREFBU0E7OztBQXNEMUIsK0RBQWVHLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9VcGRhdGUvcGFnZS5qcz85MThhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3RlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IGlkVXBkYXRlID0gc2VhcmNoUGFyYW1zLmdldCgnaWRVcGRhdGUnKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ3JlZXRpbmdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnIGluIHVwZGF0ZSBjb21wb25lbnRcIixpZFVwZGF0ZSk7XHJcbiAgICBjb25zdCBpZD1pZFVwZGF0ZVxyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW19jbGFzcywgc2V0Q2xhc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcclxuICAgXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGU9KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVwiKVxyXG4gICAgICAgIC8vdXBkYXRlIGFwaVxyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvdXBkYXRlU3R1ZGVudCcse1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgX2NsYXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3M9PVwiLHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgLy8gc2V0TmFtZShyZXMuZGF0YS5uYW1lKVxyXG4gICAgICAgICAgICAvLyBzZXRDbGFzcyhyZXMuZGF0YS5fY2xhc3MpXHJcbiAgICAgICAgICAgIC8vIHNldFJvbGwocmVzLmRhdGEucm9sbF9udW1iZXIpXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiZGF0YSBVcGRhdGVkIHN1Y2Nlc3NmdWx5XCIpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cInctc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC00IGZvbnQtc2VyaWYgdGV4dC0yeGwgZm9udC1ib2xkXCI+VXBkYXRlIFN0dWRlbnQgZGV0YWlsPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktOTUwICAgdy04MCByb3VuZGVkLXhsIHNoYWRvdy14bCBzaGFkb3ctZ3JlZW4tMzAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtLTEwIG1iLTUyICc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSB0eXBlPSduYW1lJyBjbGFzc05hbWU9J2JnLWdyYXktNzAwIHAtMiByb3VuZGVkLWxnIHctNjAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5DbGFzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2xhc3MoZS50YXJnZXQudmFsdWUpfSB0eXBlPSdjbGFzcycgY2xhc3NOYW1lPSdiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1sZyB3LTYwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVXBkYXRlfSBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIHJvdW5kZWQtbGcgcC0yIHRleHQtd2hpdGUgcHgtOCc+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIFwiPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb290ZXIiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsImF4aW9zIiwicGFnZSIsInNlYXJjaFBhcmFtcyIsImlkVXBkYXRlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInNldE5hbWUiLCJfY2xhc3MiLCJzZXRDbGFzcyIsInJvdXRlciIsImhhbmRsZVVwZGF0ZSIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFsZXJ0IiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Update/page.js\n"));

/***/ })

});