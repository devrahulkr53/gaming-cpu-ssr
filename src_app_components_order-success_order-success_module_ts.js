"use strict";
(self["webpackChunkgaming_cpu"] = self["webpackChunkgaming_cpu"] || []).push([["src_app_components_order-success_order-success_module_ts"],{

/***/ 5278:
/*!**************************************************************************!*\
  !*** ./src/app/components/order-success/order-success-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessRoutingModule": () => (/* binding */ OrderSuccessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _order_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-success.component */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _order_success_component__WEBPACK_IMPORTED_MODULE_0__.OrderSuccessComponent }
];
class OrderSuccessRoutingModule {
}
OrderSuccessRoutingModule.ɵfac = function OrderSuccessRoutingModule_Factory(t) { return new (t || OrderSuccessRoutingModule)(); };
OrderSuccessRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderSuccessRoutingModule });
OrderSuccessRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderSuccessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5327:
/*!*********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessComponent": () => (/* binding */ OrderSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);




class OrderSuccessComponent {
    constructor(route, productService, meta, title) {
        this.route = route;
        this.productService = productService;
        this.meta = meta;
        this.title = title;
        this.productId = '';
        this.meta.addTags([
            { name: 'description', content: '' },
            { name: 'author', content: '' },
            { name: 'keywords', content: '' }
        ]);
        route.queryParams.subscribe((res) => {
            this.billingAddress = JSON.parse(res === null || res === void 0 ? void 0 : res.data);
            this.productId = res["id"];
            this.getProduct(this.productId);
        });
    }
    ngOnInit() {
    }
    getProduct(id) {
        this.productService.getProductById(id).subscribe((res) => {
            this.product = res;
            this.title.setTitle(res === null || res === void 0 ? void 0 : res.productName);
        });
    }
}
OrderSuccessComponent.ɵfac = function OrderSuccessComponent_Factory(t) { return new (t || OrderSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
OrderSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderSuccessComponent, selectors: [["app-order-success"]], decls: 40, vars: 14, consts: [[1, "d-flex", "align-items-center", "my-3"], ["src", "assets/icons/check-outline.png", "width", "50px", "height", "50px", "alt", "Check icon"], [1, "p-3"], [1, "m-0"], [1, "container", "fluid", "mb-5"], [1, "row"], [1, "col-md-7", "p-0"], [1, "p-3", "px-4", "border", "border-4", "border-dark", "rounded"], [1, "btn", "btn-lg", "btn-dark"], [1, "p-3", "px-4", "bg-dark", "text-white", "py-4", "rounded", "mt-3"], [1, "col-md-5"], [1, "py-4"], ["width", "80px", 3, "src", "alt"], [1, "p-2"], ["href", "", 1, "text-dark"], [1, "display-6"]], template: function OrderSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Your order has been placed for Rs. 29,898");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "You order will be delivered withing 4-5 business days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9)(18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Order Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10)(29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13)(32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Specification details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order Id #", ctx.billingAddress == null ? null : ctx.billingAddress.orderId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Thank you ", ctx.billingAddress == null ? null : ctx.billingAddress.fullname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Fullname: ", ctx.billingAddress == null ? null : ctx.billingAddress.fullname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email Address: ", ctx.billingAddress == null ? null : ctx.billingAddress.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Phone Number: ", ctx.billingAddress == null ? null : ctx.billingAddress.phoneNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("Address: ", ctx.billingAddress == null ? null : ctx.billingAddress.address, " ", ctx.billingAddress == null ? null : ctx.billingAddress.address2, " ", ctx.billingAddress == null ? null : ctx.billingAddress.city, " - ", ctx.billingAddress == null ? null : ctx.billingAddress.zip, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.product == null ? null : ctx.product.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.product == null ? null : ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", ctx.product == null ? null : ctx.product.sellingPrice, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7347:
/*!******************************************************************!*\
  !*** ./src/app/components/order-success/order-success.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessModule": () => (/* binding */ OrderSuccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _order_success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-success-routing.module */ 5278);
/* harmony import */ var _order_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-success.component */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class OrderSuccessModule {
}
OrderSuccessModule.ɵfac = function OrderSuccessModule_Factory(t) { return new (t || OrderSuccessModule)(); };
OrderSuccessModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrderSuccessModule });
OrderSuccessModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _order_success_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderSuccessRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderSuccessModule, { declarations: [_order_success_component__WEBPACK_IMPORTED_MODULE_1__.OrderSuccessComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _order_success_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderSuccessRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_order-success_order-success_module_ts.js.map