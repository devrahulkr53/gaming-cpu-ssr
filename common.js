"use strict";
(self["webpackChunkgaming_cpu"] = self["webpackChunkgaming_cpu"] || []).push([["common"],{

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAllProducts() {
        let auth = `auth=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.auth}`;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig.databaseURL + `/products.json?${auth}`);
    }
    getProductById(id) {
        let auth = `auth=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.auth}`;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig.databaseURL + `/products/${id}.json?${auth}`);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map