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
exports.id = "pages/api/stakings";
exports.ids = ["pages/api/stakings"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/stakings.js":
/*!*******************************!*\
  !*** ./pages/api/stakings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    console.log(\"USER\");\n    if (req.method === \"POST\") {\n        try {\n            const { token  } = req.body;\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/admin/stakings\",\n                headers: {\n                    Authorization: `Bearer ${token} `\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Rha2luZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25CLElBQUlILEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0EsTUFBTSxFQUFDQyxLQUFLLEdBQUMsR0FBR0wsR0FBRyxDQUFDTSxJQUFJO1lBRXhCLElBQUlDLE1BQU0sR0FBRztnQkFDVEgsTUFBTSxFQUFFLE1BQU07Z0JBQ2RJLEdBQUcsRUFBRyxrREFBa0Q7Z0JBQ3hEQyxPQUFPLEVBQUU7b0JBQ1BDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRUwsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7YUFDRjtZQUNELE1BQU1QLDRDQUFLLENBQUNTLE1BQU0sQ0FBQyxDQUFDSSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ1YsT0FBTyxDQUFDQyxHQUFHLENBQUNVLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFRixJQUFJLEVBQUVILFFBQVEsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUNwRCxDQUFDLENBQUM7U0FDUixDQUFDLE9BQU9HLEdBQUcsRUFBRTtZQUNaaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNlLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCakIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvc3Rha2luZ3MuanM/Yjk4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc29sZS5sb2coXCJVU0VSXCIpXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHt0b2tlbn0gPSByZXEuYm9keVxyXG5cclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6ICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS9hZG1pbi9zdGFraW5nc1wiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufSBgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stakings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stakings.js"));
module.exports = __webpack_exports__;

})();