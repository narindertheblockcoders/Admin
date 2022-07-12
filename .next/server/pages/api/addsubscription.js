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
exports.id = "pages/api/addsubscription";
exports.ids = ["pages/api/addsubscription"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/addsubscription.js":
/*!**************************************!*\
  !*** ./pages/api/addsubscription.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    console.log(\"USER\");\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"Data for Api\");\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/admin/addsubscription\",\n                headers: {\n                    Authorization: `Bearer ${session.user.name} `\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkc3Vic2NyaXB0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ21CO0FBRTlCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLDJEQUFVLENBQUM7UUFBQ0UsR0FBRztLQUFDLENBQUM7SUFDdkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQixJQUFJSixHQUFHLENBQUNLLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNBLE1BQU1DLElBQUksR0FBR04sR0FBRyxDQUFDTyxJQUFJO1lBQ3JCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFLGNBQWMsQ0FBQztZQUNqQyxJQUFJRSxNQUFNLEdBQUc7Z0JBQ1RILE1BQU0sRUFBRSxNQUFNO2dCQUNkSSxHQUFHLEVBQUcseURBQXlEO2dCQUMvREMsT0FBTyxFQUFFO29CQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVULE9BQU8sQ0FBQ1UsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFBQ1AsSUFBSTthQUNQO1lBQ0QsTUFBTVQsNENBQUssQ0FBQ1csTUFBTSxDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0NMLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFYixJQUFJLEVBQUVTLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDQSxJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUNwRCxDQUFDLENBQUM7U0FFUixDQUFDLE9BQU9jLEdBQUcsRUFBRTtZQUNaakIsT0FBTyxDQUFDQyxHQUFHLENBQUNnQixHQUFHLENBQUMsQ0FBQztZQUNqQm5CLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9hZGRzdWJzY3JpcHRpb24uanM/NDE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXHJcbiAgY29uc29sZS5sb2coXCJVU0VSXCIpXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCAnRGF0YSBmb3IgQXBpJylcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6ICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS9hZG1pbi9hZGRzdWJzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLnVzZXIubmFtZX0gYCxcclxuICAgICAgICAgICAgfSxkYXRhXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgIFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uZmlnIiwidXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1c2VyIiwibmFtZSIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addsubscription.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addsubscription.js"));
module.exports = __webpack_exports__;

})();