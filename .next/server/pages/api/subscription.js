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
exports.id = "pages/api/subscription";
exports.ids = ["pages/api/subscription"];
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

/***/ "(api)/./pages/api/subscription.js":
/*!***********************************!*\
  !*** ./pages/api/subscription.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    console.log(\"USER\");\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/admin/getallsubscription\",\n                headers: {\n                    Authorization: `Bearer ${session.user.name} `\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaXB0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ21CO0FBRTlCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLDJEQUFVLENBQUM7UUFBQ0UsR0FBRztLQUFDLENBQUM7SUFDdkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQixJQUFJSixHQUFHLENBQUNLLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNBLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtZQUV4QixJQUFJQyxNQUFNLEdBQUc7Z0JBQ1RILE1BQU0sRUFBRSxNQUFNO2dCQUNkSSxHQUFHLEVBQUcsNERBQTREO2dCQUNsRUMsT0FBTyxFQUFFO29CQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVULE9BQU8sQ0FBQ1UsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1lBQ0QsTUFBTWhCLDRDQUFLLENBQUNXLE1BQU0sQ0FBQyxDQUFDTSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ1osT0FBTyxDQUFDQyxHQUFHLENBQUNZLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDakIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVGLElBQUksRUFBRUgsUUFBUSxDQUFDRyxJQUFJLENBQUNBLElBQUk7aUJBQUUsQ0FBQyxDQUFDO2FBQ3BELENBQUMsQ0FBQztTQUVSLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1psQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCcEIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhpLy4vcGFnZXMvYXBpL3N1YnNjcmlwdGlvbi5qcz9jZjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcclxuICBjb25zb2xlLmxvZyhcIlVTRVJcIilcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge3Rva2VufSA9IHJlcS5ib2R5XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHVybDogIFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL2FkbWluL2dldGFsbHN1YnNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udXNlci5uYW1lfSBgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXIiLCJuYW1lIiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscription.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscription.js"));
module.exports = __webpack_exports__;

})();