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
exports.id = "pages/api/admin";
exports.ids = ["pages/api/admin"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/admin.js":
/*!****************************!*\
  !*** ./pages/api/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"api values\");\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/signin\", data);\n            const reference = response.data;\n            // console.log(reference, \"string\")\n            res.status(200).json({\n                data: reference\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFFdkIsSUFBRztZQUNILE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBRUgsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBSWpDLElBQUlJLFFBQVEsR0FBRyxNQUFNVCxpREFBVSxDQUFDLCtDQUErQyxFQUFFSyxJQUFJLENBQUM7WUFDdEYsTUFBTU0sU0FBUyxHQUFHRixRQUFRLENBQUNKLElBQUk7WUFDL0IsbUNBQW1DO1lBQ25DRixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFUixJQUFJLEVBQUVNLFNBQVM7YUFBRSxDQUFDO1NBRTVDLENBQ0QsT0FBT0csR0FBRyxFQUFFO1lBQ1JQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFTSxHQUFHLENBQUMsQ0FBQztZQUN0QlgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQUM7Q0FFQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvYWRtaW4uanM/NTYxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICBcbiAgICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHlcbiAgICAgICAgY29uc29sZS5sb2cgKGRhdGEsIFwiYXBpIHZhbHVlc1wiKTtcblxuICAgICAgICBcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYXV0aC9zaWduaW4nLCBkYXRhKTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWZlcmVuY2UsIFwic3RyaW5nXCIpXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVmZXJlbmNlIH0pXG4gICAgICAgICBcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyAoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnJ9KTtcbn19XG5cbiAgfSJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJyZWZlcmVuY2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin.js"));
module.exports = __webpack_exports__;

})();