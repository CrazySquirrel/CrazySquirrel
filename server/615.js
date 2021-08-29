"use strict";
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 7615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PAGES = void 0;
var React = __webpack_require__(9297);
var react_router_dom_1 = __webpack_require__(2146);
var routs_1 = __webpack_require__(1801);
exports.PAGES = new Proxy(routs_1.default, {
    get: function (obj, prop) {
        return prop in obj ? obj[prop] : obj['*'];
    },
});
exports.default = (React.createElement(react_router_dom_1.Switch, null, Object.keys(exports.PAGES).map(function (v) {
    return (React.createElement(react_router_dom_1.Route, { key: v, exact: true, path: v }, exports.PAGES[v].page));
})));


/***/ })

};
;