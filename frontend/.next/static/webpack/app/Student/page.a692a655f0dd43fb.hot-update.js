"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Student/page",{

/***/ "(app-pages-browser)/./src/app/Student/page.js":
/*!*********************************!*\
  !*** ./src/app/Student/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction page() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const idStudent = searchParams.get(\"idStudent\");\n    console.log(\"greetinggggggggggggggggggggggg\", idStudent);\n    const id = idStudent;\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"DEFAULT\");\n    const [_class, setClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"DEFAULT\");\n    const [roll_number, setRoll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [allData, setAllData]=useState([])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            const res = axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:8000/api/v1/getStudentById\", {\n                id\n            }).then((res)=>{\n                console.log(\"success==\", res.data);\n                setName(res.data.name);\n                setClass(res.data._class);\n                setRoll(res.data.roll_number);\n            });\n        // console.log(res.data)\n        // // console.log(allData);\n        } catch (error) {\n            console.log(error);\n        }\n    }, []);\n    const handleDelete = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].delete(\"http://localhost:8000/api/v1/deleteStudent\", {\n            data: {\n                id: id\n            }\n        }).then((res)=>{\n            console.log(\"data send for deletion successfully\", res);\n        }).catch((error)=>{\n            console.log(\"Error during calling api of delete note\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center font-bold text-3xl  font-serif pb-8\",\n                children: \"Here is all about a particular student detail\"\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  justify-center text-black h-[300px] pb-6  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-y-4 w-1/2 bg-gray-200 p-10   rounded-3xl shadow-xl shadow-slate-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-xl\",\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-xl\",\n                                    children: \"Class:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: _class\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-xl\",\n                                    children: \"roll_number:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: roll_number\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center pb-20 mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"px-10\",\n                        href: {\n                            pathname: \"/Update\",\n                            query: {\n                                idUpdate: id\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20  rounded\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleDelete,\n                            className: \"bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-20 rounded\",\n                            children: \"DELETE\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\Student\\\\page.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"KlACyl+Eng+Q1o6qEGkW764kSiY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU3R1ZGVudC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUQ7QUFDQztBQUNUO0FBQ2Y7QUFFRztBQUU3QixTQUFTTzs7SUFDTCxNQUFNQyxlQUFlTCxnRUFBZUE7SUFDcEMsTUFBTU0sWUFBWUQsYUFBYUUsR0FBRyxDQUFDO0lBQ25DQyxRQUFRQyxHQUFHLENBQUMsa0NBQWlDSDtJQUM3QyxNQUFNSSxLQUFHSjtJQUdULE1BQUssQ0FBQ0ssTUFBS0MsUUFBUSxHQUFDYiwrQ0FBUUEsQ0FBQztJQUM3QixNQUFLLENBQUNjLFFBQU9DLFNBQVMsR0FBQ2YsK0NBQVFBLENBQUM7SUFDaEMsTUFBSyxDQUFDZ0IsYUFBWUMsUUFBUSxHQUFDakIsK0NBQVFBLENBQUM7SUFFcEMsMkNBQTJDO0lBQzNDRCxnREFBU0EsQ0FBQztRQUNOLElBQUk7WUFDRixNQUFNbUIsTUFBT2YsNkNBQUtBLENBQUNnQixJQUFJLENBQUMsK0NBQThDO2dCQUFDUjtZQUFFLEdBQ3hFUyxJQUFJLENBQUMsQ0FBQ0Y7Z0JBQ0xULFFBQVFDLEdBQUcsQ0FBQyxhQUFZUSxJQUFJRyxJQUFJO2dCQUNoQ1IsUUFBUUssSUFBSUcsSUFBSSxDQUFDVCxJQUFJO2dCQUNyQkcsU0FBU0csSUFBSUcsSUFBSSxDQUFDUCxNQUFNO2dCQUN4QkcsUUFBUUMsSUFBSUcsSUFBSSxDQUFDTCxXQUFXO1lBQzlCO1FBQ0Esd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUU3QixFQUFFLE9BQU9NLE9BQU87WUFDZGIsUUFBUUMsR0FBRyxDQUFDWTtRQUNkO0lBQ0YsR0FBRSxFQUFFO0lBQ0osTUFBTUMsZUFBYztRQUNsQnBCLDZDQUFLQSxDQUFDcUIsTUFBTSxDQUFDLDhDQUE2QztZQUFDSCxNQUFNO2dCQUMvRFYsSUFBS0E7WUFDUDtRQUFDLEdBQ0FTLElBQUksQ0FBQyxDQUFDRjtZQUNMVCxRQUFRQyxHQUFHLENBQUMsdUNBQXNDUTtRQUdwRCxHQUNDTyxLQUFLLENBQUMsQ0FBQ0g7WUFDTmIsUUFBUUMsR0FBRyxDQUFDLDJDQUEwQ1k7UUFDeEQ7SUFFRjtJQUVKLHFCQUNFLDhEQUFDSTs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFrRDs7Ozs7OzBCQUNoRSw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1gsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDWCw4REFBQ0Y7NEJBQUlFLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBb0I7Ozs7Ozs4Q0FDbEMsOERBQUNDOzhDQUFHakI7Ozs7Ozs7Ozs7OztzQ0FHUiw4REFBQ2M7NEJBQUlFLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBR0MsV0FBVTs4Q0FBb0I7Ozs7Ozs4Q0FDbEMsOERBQUNDOzhDQUFHZjs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDWTs0QkFBSUUsV0FBVTs7OENBQ1gsOERBQUNEO29DQUFHQyxXQUFVOzhDQUFvQjs7Ozs7OzhDQUNsQyw4REFBQ0M7OENBQUdiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNaEIsOERBQUNVO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ3hCLGlEQUFJQTt3QkFBQ3dCLFdBQVU7d0JBQVFFLE1BQU07NEJBQUVDLFVBQVU7NEJBQVdDLE9BQU87Z0NBQUVDLFVBQVV0Qjs0QkFBRzt3QkFBRTtrQ0FDekUsNEVBQUN1Qjs0QkFBT04sV0FBVTtzQ0FBeUU7Ozs7Ozs7Ozs7O2tDQUkvRiw4REFBQ3hCLGlEQUFJQTt3QkFBRTBCLE1BQUs7a0NBQ1IsNEVBQUNJOzRCQUFPQyxTQUFTWjs0QkFBY0ssV0FBVTtzQ0FBdUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU94SCw4REFBQzFCLDBEQUFNQTs7Ozs7Ozs7Ozs7QUFJZjtHQXBGU0c7O1FBQ2dCSiw0REFBZUE7OztBQXFGeEMsK0RBQWVJLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9TdHVkZW50L3BhZ2UuanM/NGExYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gcGFnZSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3QgaWRTdHVkZW50ID0gc2VhcmNoUGFyYW1zLmdldCgnaWRTdHVkZW50Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdyZWV0aW5nZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ1wiLGlkU3R1ZGVudCk7XHJcbiAgICBjb25zdCBpZD1pZFN0dWRlbnRcclxuXHJcblxyXG4gICAgY29uc3RbbmFtZSxzZXROYW1lXT11c2VTdGF0ZShcIkRFRkFVTFRcIilcclxuICAgIGNvbnN0W19jbGFzcyxzZXRDbGFzc109dXNlU3RhdGUoXCJERUZBVUxUXCIpXHJcbiAgICBjb25zdFtyb2xsX251bWJlcixzZXRSb2xsXT11c2VTdGF0ZSgwKVxyXG5cclxuICAgIC8vIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxEYXRhXT11c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9nZXRTdHVkZW50QnlJZCcse2lkfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzPT1cIixyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldE5hbWUocmVzLmRhdGEubmFtZSlcclxuICAgICAgICAgICAgc2V0Q2xhc3MocmVzLmRhdGEuX2NsYXNzKVxyXG4gICAgICAgICAgICBzZXRSb2xsKHJlcy5kYXRhLnJvbGxfbnVtYmVyKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coYWxsRGF0YSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFtdKVxyXG4gICAgICBjb25zdCBoYW5kbGVEZWxldGU9KCgpPT57XHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9kZWxldGVTdHVkZW50XCIse2RhdGEgOntcclxuICAgICAgICAgIGlkIDogaWRcclxuICAgICAgICB9fSlcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHNlbmQgZm9yIGRlbGV0aW9uIHN1Y2Nlc3NmdWxseVwiLHJlcyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZHVyaW5nIGNhbGxpbmcgYXBpIG9mIGRlbGV0ZSBub3RlXCIsZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCAgZm9udC1zZXJpZiBwYi04XCI+SGVyZSBpcyBhbGwgYWJvdXQgYSBwYXJ0aWN1bGFyIHN0dWRlbnQgZGV0YWlsPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2sgaC1bMzAwcHhdIHBiLTYgIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktNCB3LTEvMiBiZy1ncmF5LTIwMCBwLTEwICAgcm91bmRlZC0zeGwgc2hhZG93LXhsIHNoYWRvdy1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsXCI+TmFtZTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPkNsYXNzOjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e19jbGFzc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj5yb2xsX251bWJlcjo8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntyb2xsX251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwYi0yMCBtYi0yMFwiPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3B4LTEwJyBocmVmPXt7IHBhdGhuYW1lOiAnL1VwZGF0ZScsIHF1ZXJ5OiB7IGlkVXBkYXRlOiBpZCB9IH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTIwICByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayAgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMjAgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERFTEVURVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxoMT57Z3JlZXRpbmd9PC9oMT4gKi99XHJcbiAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJGb290ZXIiLCJheGlvcyIsIkxpbmsiLCJwYWdlIiwic2VhcmNoUGFyYW1zIiwiaWRTdHVkZW50IiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImlkIiwibmFtZSIsInNldE5hbWUiLCJfY2xhc3MiLCJzZXRDbGFzcyIsInJvbGxfbnVtYmVyIiwic2V0Um9sbCIsInJlcyIsInBvc3QiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlIiwiY2F0Y2giLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsInAiLCJocmVmIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkVXBkYXRlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Student/page.js\n"));

/***/ })

});