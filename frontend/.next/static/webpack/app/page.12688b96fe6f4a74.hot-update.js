"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_Note_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Note.js */ \"(app-pages-browser)/./src/components/Note.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./src/components/Footer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Image from \"next/image\";\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            const res = axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/api/v1/getAllStudents\").then((res)=>{\n                return res.data.students;\n            }).then((res)=>{\n                setAllData(res);\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl text-center font-bold font-serif  \",\n                children: \"All Student Details\"\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center  p-10 mb-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap p-5 bg-black text-[#0077ff] border-2 border-gray-500  rounded-md box-border w-auto gap-2  h-auto justify-center shadow-2xl shadow-gray-500\",\n                    children: allData.map((allData)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Note_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                ...allData\n                            }, void 0, false, {\n                                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, allData.id, false, {\n                            fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\java script\\\\NEXT_JS_TASK\\\\frontend\\\\src\\\\app\\\\page.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"wvSF2ckxQjUNASfZMrdtN9Q7fbY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0Esa0NBQWtDO0FBQ1Q7QUFDa0I7QUFDZDtBQUNXO0FBQ0M7QUFFMUIsU0FBU007O0lBRXZCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFDUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXBDQyxnREFBU0EsQ0FBQztRQUNSLElBQUk7WUFDRixNQUFNTyxNQUFPVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLCtDQUN0QkMsSUFBSSxDQUFDLENBQUNGO2dCQUdMLE9BQU9BLElBQUlHLElBQUksQ0FBQ0MsUUFBUTtZQUMxQixHQUNDRixJQUFJLENBQUMsQ0FBQ0Y7Z0JBRUxELFdBQVdDO1lBQ2I7UUFHRixFQUFFLE9BQU9LLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0YsR0FBRSxFQUFFO0lBR04scUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBOEM7Ozs7OzswQkFDekQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDZFgsUUFBUWEsR0FBRyxDQUFDLENBQUNiLHdCQUNaLDhEQUFDVTtzQ0FDQyw0RUFBQ2IsMkRBQUlBO2dDQUFHLEdBQUdHLE9BQU87Ozs7OzsyQkFEVkEsUUFBUWMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzBCQU94Qiw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNiLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0dBMUN3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cblxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSAsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBOb3RlIGZyb20gXCJAL2NvbXBvbmVudHMvTm90ZS5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxEYXRhXT11c2VTdGF0ZShbXSlcbiBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9ICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvZ2V0QWxsU3R1ZGVudHMnKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgXG4gIFxuICAgICAgICAgIHJldHVybiByZXMuZGF0YS5zdHVkZW50c1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgIFxuICAgICAgICAgIHNldEFsbERhdGEocmVzKVxuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfSxbXSlcbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBmb250LXNlcmlmICBcIj5BbGwgU3R1ZGVudCBEZXRhaWxzPC9oMT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBwLTEwIG1iLTQwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgcC01IGJnLWJsYWNrIHRleHQtWyMwMDc3ZmZdIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCAgcm91bmRlZC1tZCBib3gtYm9yZGVyIHctYXV0byBnYXAtMiAgaC1hdXRvIGp1c3RpZnktY2VudGVyIHNoYWRvdy0yeGwgc2hhZG93LWdyYXktNTAwXCIgPlxuICAgICAgICB7YWxsRGF0YS5tYXAoKGFsbERhdGEpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YWxsRGF0YS5pZH0+XG4gICAgICAgICAgICA8Tm90ZSAgey4uLmFsbERhdGF9IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJOb3RlIiwiRm9vdGVyIiwiSG9tZSIsImFsbERhdGEiLCJzZXRBbGxEYXRhIiwicmVzIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJzdHVkZW50cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});