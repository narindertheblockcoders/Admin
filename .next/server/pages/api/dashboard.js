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
exports.id = "pages/api/dashboard";
exports.ids = ["pages/api/dashboard"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/dashboard.js":
/*!********************************!*\
  !*** ./pages/api/dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    console.log(\"USER\");\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/admin/dashboard/stats\",\n                headers: {\n                    Authorization: `Bearer ${token} `\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVYLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQixJQUFJSCxHQUFHLENBQUNJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNBLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSTtZQUV4QixJQUFJQyxNQUFNLEdBQUc7Z0JBQ1RILE1BQU0sRUFBRSxNQUFNO2dCQUNkSSxHQUFHLEVBQUcseURBQXlEO2dCQUMvREMsT0FBTyxFQUFFO29CQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVMLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7WUFDRCxNQUFNUCw0Q0FBSyxDQUFDUyxNQUFNLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzQ2QsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUYsSUFBSSxFQUFFSCxRQUFRLENBQUNHLElBQUksQ0FBQ0EsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDcEQsQ0FBQyxDQUFDO1NBQ1IsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDWmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxHQUFHLENBQUMsQ0FBQztZQUNqQmpCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhpLy4vcGFnZXMvYXBpL2Rhc2hib2FyZC5qcz84MTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zb2xlLmxvZyhcIlVTRVJcIilcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3Rva2VufSA9IHJlcS5ib2R5XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHVybDogIFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL2FkbWluL2Rhc2hib2FyZC9zdGF0c1wiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufSBgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/dashboard.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dashboard.js"));
module.exports = __webpack_exports__;

})();