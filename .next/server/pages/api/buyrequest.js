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
exports.id = "pages/api/buyrequest";
exports.ids = ["pages/api/buyrequest"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/buyrequest.js":
/*!*********************************!*\
  !*** ./pages/api/buyrequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    console.log(\"USER\");\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/admin/buy/transactions\",\n                headers: {\n                    Authorization: `Bearer ${token} `\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnV5cmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDbkIsSUFBSUgsR0FBRyxDQUFDSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDQSxNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFHTCxHQUFHLENBQUNNLElBQUk7WUFFeEIsSUFBSUMsTUFBTSxHQUFHO2dCQUNUSCxNQUFNLEVBQUUsTUFBTTtnQkFDZEksR0FBRyxFQUFHLDBEQUEwRDtnQkFDaEVDLE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFTCxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNsQzthQUNGO1lBQ0QsTUFBTVAsNENBQUssQ0FBQ1MsTUFBTSxDQUFDLENBQUNJLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0NkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVGLElBQUksRUFBRUgsUUFBUSxDQUFDRyxJQUFJLENBQUNBLElBQUk7aUJBQUUsQ0FBQyxDQUFDO2FBQ3BELENBQUMsQ0FBQztTQUNSLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1poQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsR0FBRyxDQUFDLENBQUM7WUFDakJqQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9idXlyZXF1ZXN0LmpzPzI0YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnNvbGUubG9nKFwiVVNFUlwiKVxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7dG9rZW59ID0gcmVxLmJvZHlcclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiAgXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYWRtaW4vYnV5L3RyYW5zYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufSBgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/buyrequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/buyrequest.js"));
module.exports = __webpack_exports__;

})();