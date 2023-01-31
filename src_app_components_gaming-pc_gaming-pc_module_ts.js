"use strict";
(self["webpackChunkgaming_cpu"] = self["webpackChunkgaming_cpu"] || []).push([["src_app_components_gaming-pc_gaming-pc_module_ts"],{

/***/ 4896:
/*!******************************************************************!*\
  !*** ./src/app/components/gaming-pc/gaming-pc-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamingPcRoutingModule": () => (/* binding */ GamingPcRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gaming_pc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaming-pc.component */ 9059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _gaming_pc_component__WEBPACK_IMPORTED_MODULE_0__.GamingPcComponent }
];
class GamingPcRoutingModule {
}
GamingPcRoutingModule.ɵfac = function GamingPcRoutingModule_Factory(t) { return new (t || GamingPcRoutingModule)(); };
GamingPcRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GamingPcRoutingModule });
GamingPcRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GamingPcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9059:
/*!*************************************************************!*\
  !*** ./src/app/components/gaming-pc/gaming-pc.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamingPcComponent": () => (/* binding */ GamingPcComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0) { return { "border border-4 border-dark": a0 }; };
function GamingPcComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 12)(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 14)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.selectedTab === "BUDGET GAMING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r0.selectedTab === "EXTREME GAMING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r0.selectedTab === "STREAMING"));
} }
function GamingPcComponent_div_12_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enjoy all your favourite latest games without breaking the bank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamingPcComponent_div_12_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Extreme grade with high-end 4k and VR gaming experience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GamingPcComponent_div_12_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Top of the line Streaming ready gaming system. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "d-none": a0 }; };
function GamingPcComponent_div_12_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "a", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 23)(4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx_r6.selectedTab !== (item_r7 == null ? null : item_r7.name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/product?id=" + item_r7.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r7.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r7 == null ? null : item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r7.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r7 == null ? null : item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", item_r7.sellingPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.name);
} }
function GamingPcComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GamingPcComponent_div_12_p_3_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GamingPcComponent_div_12_p_4_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GamingPcComponent_div_12_p_5_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GamingPcComponent_div_12_div_6_Template, 9, 10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedTab, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedTab === "BUDGET GAMING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedTab === "EXTREME GAMING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedTab === "STREAMING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.productList);
} }
function GamingPcComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class GamingPcComponent {
    constructor(productService, route, meta, title) {
        this.productService = productService;
        this.route = route;
        this.meta = meta;
        this.title = title;
        this.selectedPC = 0;
        this.isPageLoading = true;
        this.selectedTab = 'BUDGET GAMING';
        this.meta.addTags([
            { name: 'description', content: '' },
            { name: 'author', content: '' },
            { name: 'keywords', content: '' }
        ]);
        this.title.setTitle('Budget, Extreme and Streaming Gaming PC');
        route.queryParams.subscribe((res) => {
            console.log(res);
            this.selectedTab = (res === null || res === void 0 ? void 0 : res.category) || 'BUDGET GAMING';
        });
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.productService.getAllProducts().subscribe(res => {
            this.productList = this.mergeKeyValues(res);
            this.isPageLoading = false;
        });
    }
    mergeKeyValues(obj) {
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        return values.map((value, index) => {
            return Object.assign(Object.assign({}, value), { id: keys[index] });
        });
    }
}
GamingPcComponent.ɵfac = function GamingPcComponent_Factory(t) { return new (t || GamingPcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
GamingPcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GamingPcComponent, selectors: [["app-gaming-pc"]], decls: 14, vars: 3, consts: [[1, "container"], [1, "d-flex", "mt-2"], [1, "mx-1"], ["href", "/", 1, "text-decoration-none", "text-dark"], [1, "container-fluid", "my-3"], ["class", "d-flex align-items-center", "style", "margin-bottom: -4px;", 4, "ngIf"], ["class", "row text-center border border-5 border-dark pt-3", "style", "border-bottom: none !important;border-left: none !important;border-right: none !important;", 4, "ngIf"], ["class", "row py-5 my-5", 4, "ngIf"], [1, "d-flex", "align-items-center", 2, "margin-bottom", "-4px"], ["href", "/gaming-pc?category=BUDGET GAMING"], [1, "p-2", "cursor-pointer", "rounded", 3, "ngClass"], ["src", "assets/pc-images/budget/3.png", "width", "50px", "height", "50px", "alt", "BUDGET"], ["href", "/gaming-pc?category=EXTREME GAMING"], ["src", "assets/pc-images/extreme/1.png", "width", "50px", "height", "50px", "alt", "EXTREME"], ["href", "/gaming-pc?category=STREAMING"], ["src", "assets/pc-images/streaming/2.png", "width", "50px", "height", "50px", "alt", "STREAMING"], [1, "row", "text-center", "border", "border-5", "border-dark", "pt-3", 2, "border-bottom", "none !important", "border-left", "none !important", "border-right", "none !important"], [1, "text-start"], ["class", "text-start", 4, "ngIf"], ["class", "col-6 col-md-3 p-1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-3", "p-1", 3, "ngClass"], [3, "href"], [1, "card", "cursor-pointer", "bg-dark", "text-white", "my-1"], ["width", "70%", "height", "280px", 1, "d-none", "d-md-block", "mx-auto", "p-4", 3, "src", "alt"], ["width", "90%", "height", "180px", 1, "d-block", "d-md-none", "mx-auto", "p-4", 3, "src", "alt"], [1, "row", "py-5", "my-5"], [1, "text-center"], [1, "spinner-border", "text-dark"]], template: function GamingPcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " /");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gaming PCs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Gaming PCs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GamingPcComponent_div_11_Template, 10, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GamingPcComponent_div_12_Template, 7, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GamingPcComponent_div_13_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPageLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPageLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPageLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".active[_ngcontent-%COMP%] {\n  background-color: #525151 !important;\n}\n\n.active-tab[_ngcontent-%COMP%] {\n  border-bottom: 8px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWluZy1wYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBQ0E7RUFDSSw4QkFBQTtBQUVKIiwiZmlsZSI6ImdhbWluZy1wYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTE1MSAhaW1wb3J0YW50OyBcclxufVxyXG4uYWN0aXZlLXRhYiB7XHJcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3572:
/*!**********************************************************!*\
  !*** ./src/app/components/gaming-pc/gaming-pc.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamingPcModule": () => (/* binding */ GamingPcModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _gaming_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaming-pc-routing.module */ 4896);
/* harmony import */ var _gaming_pc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaming-pc.component */ 9059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class GamingPcModule {
}
GamingPcModule.ɵfac = function GamingPcModule_Factory(t) { return new (t || GamingPcModule)(); };
GamingPcModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GamingPcModule });
GamingPcModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _gaming_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamingPcRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GamingPcModule, { declarations: [_gaming_pc_component__WEBPACK_IMPORTED_MODULE_1__.GamingPcComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _gaming_pc_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamingPcRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_gaming-pc_gaming-pc_module_ts.js.map