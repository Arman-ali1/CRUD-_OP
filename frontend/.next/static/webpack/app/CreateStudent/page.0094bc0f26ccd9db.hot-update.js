"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/CreateStudent/page",{

/***/ "(app-pages-browser)/./src/app/CreateStudent/page.js":
/*!***************************************!*\
  !*** ./src/app/CreateStudent/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CreateStudent() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [_class, setClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [roll_number, setRollNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(name);\n    console.log(_class);\n    console.log(roll_number);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"handle submit start\");\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:8000/api/v1/registerUser\", {\n                name,\n                _class,\n                roll_number\n            }).then((res)=>{\n                console.log(\"data send successfully\", res.data);\n                alert(\"data send successfully\");\n                router.push(\"/\");\n            });\n        } catch (error) {\n            console.log(\"error during calling save api\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen flex flex-col items-center justify-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center p-6 text-2xl font-serif font-bold\",\n                        children: \"Create Student detail\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-950   w-80 rounded-xl shadow-xl shadow-green-300 flex flex-col justify-center items-center  m-10 mb-40  \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-white\",\n                                                children: \"Student Name\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: (e)=>setName(e.target.value),\n                                                type: \"name\",\n                                                className: \"bg-gray-700 p-2 rounded-lg w-60\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-white\",\n                                                children: \"Student Class\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: (e)=>setClass(e.target.value),\n                                                type: \"string\",\n                                                className: \"bg-gray-700 p-2 rounded-lg w-60\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-white\",\n                                                children: \"S roll_number\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: (e)=>setRollNumber(e.target.value),\n                                                type: \"Number\",\n                                                className: \"bg-gray-700 p-2 rounded-lg w-60\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    className: \"bg-blue-500 rounded-lg p-2 text-white px-8\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\CreateStudent\\\\page.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateStudent, \"5i95V3iYuGndedx8inRRQ1lIU1k=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CreateStudent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateStudent);\nvar _c;\n$RefreshReg$(_c, \"CreateStudent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ3JlYXRlU3R1ZGVudC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QjtBQUNlO0FBQ1Y7QUFDTDtBQUNrQjtBQUUzQyxTQUFTSzs7SUFFTCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxRQUFRQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3BDLE1BQU1RLFNBQU9OLDBEQUFTQTtJQUV0QixNQUFNLENBQUNPLGFBQWFDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDOUNXLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWk8sUUFBUUMsR0FBRyxDQUFDTjtJQUNaSyxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTUksZUFBYSxPQUFNQztRQUNyQkEsRUFBRUMsY0FBYztRQUNoQkosUUFBUUMsR0FBRyxDQUFDO1FBQ04sSUFBSTtZQUNGLE1BQU1YLDZDQUFLQSxDQUNWZSxJQUFJLENBQUMsNkNBQTRDO2dCQUFDWjtnQkFBS0U7Z0JBQU9HO1lBQVcsR0FDekVRLElBQUksQ0FBQyxDQUFDQztnQkFDTFAsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQk0sSUFBSUMsSUFBSTtnQkFDOUNDLE1BQU07Z0JBQ05aLE9BQU9hLElBQUksQ0FBQztZQUNaO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBZ0NVO1FBQzlDO0lBQ1Y7SUFDRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFXOztrQ0FDWiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWdEOzs7Ozs7a0NBQzlELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEOztrREFDRyw4REFBQ0E7d0NBQUlDLFdBQVU7OzBEQUNmLDhEQUFDRTtnREFBTUYsV0FBVTswREFBYTs7Ozs7OzBEQUM5Qiw4REFBQ0c7Z0RBQU1DLFVBQVUsQ0FBQ2QsSUFBTVQsUUFBUVMsRUFBRWUsTUFBTSxDQUFDQyxLQUFLO2dEQUFHQyxNQUFLO2dEQUFPUCxXQUFVOzs7Ozs7Ozs7Ozs7a0RBRXZFLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2YsOERBQUNFO2dEQUFNRixXQUFVOzBEQUFhOzs7Ozs7MERBQzlCLDhEQUFDRztnREFBTUMsVUFBVSxDQUFDZCxJQUFNUCxTQUFTTyxFQUFFZSxNQUFNLENBQUNDLEtBQUs7Z0RBQUdDLE1BQUs7Z0RBQVNQLFdBQVU7Ozs7Ozs7Ozs7OztrREFFMUUsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDZiw4REFBQ0U7Z0RBQU1GLFdBQVU7MERBQWE7Ozs7OzswREFDOUIsOERBQUNHO2dEQUFNQyxVQUFVLENBQUNkLElBQU1KLGNBQWNJLEVBQUVlLE1BQU0sQ0FBQ0MsS0FBSztnREFBR0MsTUFBSztnREFBU1AsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtuRiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNRO29DQUFPQyxTQUFTcEI7b0NBQWNXLFdBQVU7OENBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEcsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDekIsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CO0dBekRTSTs7UUFJUUQsc0RBQVNBOzs7S0FKakJDO0FBMkRULCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ3JlYXRlU3R1ZGVudC9wYWdlLmpzPzc0YjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlU3R1ZGVudCgpIHtcclxuXHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtfY2xhc3MsIHNldENsYXNzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW3JvbGxfbnVtYmVyLCBzZXRSb2xsTnVtYmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhfY2xhc3MpO1xyXG4gICAgY29uc29sZS5sb2cocm9sbF9udW1iZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9YXN5bmMoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGUgc3VibWl0IHN0YXJ0XCIpXHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvcmVnaXN0ZXJVc2VyXCIse25hbWUsX2NsYXNzLHJvbGxfbnVtYmVyfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlbmQgc3VjY2Vzc2Z1bGx5XCIsIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgYWxlcnQoXCJkYXRhIHNlbmQgc3VjY2Vzc2Z1bGx5XCIpXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBkdXJpbmcgY2FsbGluZyBzYXZlIGFwaVwiLGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInctc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC02IHRleHQtMnhsIGZvbnQtc2VyaWYgZm9udC1ib2xkXCI+Q3JlYXRlIFN0dWRlbnQgZGV0YWlsPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktOTUwICAgdy04MCByb3VuZGVkLXhsIHNoYWRvdy14bCBzaGFkb3ctZ3JlZW4tMzAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtLTEwIG1iLTQwICAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5TdHVkZW50IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSB0eXBlPSduYW1lJyBjbGFzc05hbWU9J2JnLWdyYXktNzAwIHAtMiByb3VuZGVkLWxnIHctNjAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5TdHVkZW50IENsYXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRDbGFzcyhlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3N0cmluZycgY2xhc3NOYW1lPSdiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1sZyB3LTYwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+UyByb2xsX251bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um9sbE51bWJlcihlLnRhcmdldC52YWx1ZSl9IHR5cGU9J051bWJlcicgY2xhc3NOYW1lPSdiZy1ncmF5LTcwMCBwLTIgcm91bmRlZC1sZyB3LTYwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIHJvdW5kZWQtbGcgcC0yIHRleHQtd2hpdGUgcHgtOCc+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBcIj5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVN0dWRlbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJGb290ZXIiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiQ3JlYXRlU3R1ZGVudCIsIm5hbWUiLCJzZXROYW1lIiwiX2NsYXNzIiwic2V0Q2xhc3MiLCJyb3V0ZXIiLCJyb2xsX251bWJlciIsInNldFJvbGxOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYWxlcnQiLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/CreateStudent/page.js\n"));

/***/ })

});