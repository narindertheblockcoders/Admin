"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\",\n        maxAge: 500\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Custom Provider\",\n            async authorize (credentials) {\n                let { email , password  } = credentials;\n                console.log(credentials);\n                let data = {\n                    email: email,\n                    password: password\n                };\n                console.log(data, \"form email and password\");\n                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/signin\", data);\n                let user = response.data;\n                let token = response.data.data;\n                if (!token) {\n                    throw new Error(\"Invalid token\");\n                }\n                if (!(response.status == 200)) {\n                    throw new Error(\"Invalid Credentials\" + email);\n                }\n                if (response.status == 200) {\n                    return user = {\n                        name: token,\n                        email: email\n                    };\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNrQztBQUVuRSxpRUFBZUMsZ0RBQVEsQ0FBQztJQUN0QkUsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDREMsU0FBUyxFQUFFO1FBQ1RKLHNFQUFvQixDQUFDO1lBQ25CSyxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixJQUFJLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdGLFdBQVc7Z0JBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVyxDQUFDO2dCQUN4QixJQUFJSyxJQUFJLEdBQUc7b0JBQUVKLEtBQUssRUFBRUEsS0FBSztvQkFBRUMsUUFBUSxFQUFFQSxRQUFRO2lCQUFFO2dCQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJQyxRQUFRLEdBQUcsTUFBTWYsaURBQVUsQ0FDN0IsK0NBQStDLEVBQy9DYyxJQUFJLENBQ0w7Z0JBQ0QsSUFBSUcsSUFBSSxHQUFHRixRQUFRLENBQUNELElBQUk7Z0JBQ3hCLElBQUlJLEtBQUssR0FBR0gsUUFBUSxDQUFDRCxJQUFJLENBQUNBLElBQUk7Z0JBRTlCLElBQUksQ0FBQ0ksS0FBSyxFQUFFO29CQUNWLE1BQU0sSUFBSUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUVsQztnQkFDRCxJQUFJLENBQUMsQ0FBQ0osUUFBUSxDQUFDSyxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBRTdCLE1BQU0sSUFBSUQsS0FBSyxDQUFDLHFCQUFxQixHQUFFVCxLQUFLLENBQUMsQ0FBQztpQkFDL0M7Z0JBQ0QsSUFBSUssUUFBUSxDQUFDSyxNQUFNLElBQUksR0FBRyxFQUFFO29CQUMxQixPQUFRSCxJQUFJLEdBQUc7d0JBQ2JWLElBQUksRUFBRVcsS0FBSzt3QkFDWFIsS0FBSyxFQUFFQSxLQUFLO3FCQUNiLENBQUU7aUJBQ0o7YUFDRjtTQUNGLENBQUM7S0FDSDtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDUwMCxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcnMoe1xuICAgICAgbmFtZTogXCJDdXN0b20gUHJvdmlkZXJcIixcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBsZXQgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVkZW50aWFscylcbiAgICAgICAgbGV0IGRhdGEgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiZm9ybSBlbWFpbCBhbmQgcGFzc3dvcmRcIik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYXV0aC9zaWduaW5cIixcbiAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuXG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuXCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkpIHtcbiAgICAgICAgICBcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIENyZWRlbnRpYWxzXCIgK2VtYWlsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIHJldHVybiAodXNlciA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRva2VuLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXJzIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzcG9uc2UiLCJwb3N0IiwidXNlciIsInRva2VuIiwiRXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();